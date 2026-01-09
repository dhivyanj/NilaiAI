from fastapi import APIRouter
import pandas as pd
from config.database import get_db
from ml.features import build_features
from ml.predict import predict

router = APIRouter(prefix="/insights")

@router.get("/{user_id}")
def insights(user_id: str):
    db = get_db()
    df = pd.read_sql(
        "SELECT * FROM daily_summary WHERE user_id=%s ORDER BY date",
        db,
        params=[user_id]
    )

    if len(df) < 5:
        return {"message": "Not enough data"}

    X = build_features(df)
    scores, labels = predict(X)

    return {
        "deviation_score": scores[-1],
        "status": "deviation" if labels[-1] == -1 else "normal"
    }
