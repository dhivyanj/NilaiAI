from fastapi import APIRouter
import pandas as pd

from config.database import get_db
from ml.features import build_features
from ml.predict import predict

router = APIRouter(prefix="/insights", tags=["insights"])


@router.get("/{user_id}")
def get_insights(user_id: str):
    db = get_db()

    # 1️⃣ Load daily data
    df = pd.read_sql(
        "SELECT * FROM daily_summary WHERE user_id=%s ORDER BY date",
        db,
        params=(user_id,)
    )

    if len(df) < 5:
        return {
            "message": "Not enough data to generate insights yet."
        }

    # 2️⃣ Build ML features
    X = build_features(df)

    # 3️⃣ Personal baseline model
    user_scores, user_labels = predict(X)

    # 4️⃣ Interpret personal deviation
    if user_labels[-1] == -1:
        personal_insight = (
            "Your recent usage pattern shows a noticeable change "
            "compared to your usual routine."
        )
    else:
        personal_insight = (
            "Your usage pattern is consistent with your normal routine."
        )

    # 5️⃣ Healthy baseline comparison (simple, ethical)
    # NOTE: We reuse the same predict() for now
    healthy_scores, _ = predict(X)

    if healthy_scores[-1] < -0.15:
        healthy_comparison = (
            "Your usage differs noticeably from typical healthy patterns."
        )
    else:
        healthy_comparison = (
            "Your usage aligns with common healthy usage patterns."
        )

    # 6️⃣ Final response
    return {
        "deviation_score": user_scores[-1],
        "personal_insight": personal_insight,
        "healthy_baseline_comparison": healthy_comparison
    }


@router.get("/{user_id}/history")
def history(user_id: str):
    db = get_db()
    df = pd.read_sql(
        "SELECT date, avg_session_duration, late_usage_ratio FROM daily_summary WHERE user_id=%s ORDER BY date",
        db,
        params=(user_id,)
    )
    return df.to_dict(orient="list")
