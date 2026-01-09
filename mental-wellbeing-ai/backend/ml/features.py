import pandas as pd

FEATURE_COLUMNS = [
    "avg_session_duration",
    "session_count",
    "late_usage_ratio",
    "session_variability",
    "engagement_trend",
    "late_usage_trend"
]

def build_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.sort_values("date").copy()

    df["session_variability"] = (
        df["avg_session_duration"]
        .rolling(window=5, min_periods=3)
        .std()
    )

    df["engagement_trend"] = df["session_count"].diff()
    df["late_usage_trend"] = df["late_usage_ratio"].diff()

    return df[FEATURE_COLUMNS].dropna()
