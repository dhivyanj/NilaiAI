import joblib
import pandas as pd
from ml.feature_engineering import deviation_features
from ml.scoring import mental_health_score

model = joblib.load("ml/artifacts/model.pkl")
scaler = joblib.load("ml/artifacts/scaler.pkl")
baseline = joblib.load("ml/artifacts/baseline.pkl")

def analyze_user(data: dict):
    df = pd.DataFrame([data])

    X_dev = deviation_features(df, baseline)
    X_scaled = scaler.transform(X_dev)

    probability = model.predict_proba(X_scaled)[0][1]
    score = mental_health_score(df.iloc[0], baseline)

    if score >= 75:
        status = "Mentally Healthy"
    elif score >= 50:
        status = "Moderate Stability"
    else:
        status = "Needs Attention"

    return {
        "score": score,
        "probability": round(float(probability), 3),
        "status": status
    }
