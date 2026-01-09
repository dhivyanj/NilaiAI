import pandas as pd

FEATURES = [
    "login_time",
    "session_duration",
    "activity_count",
    "usage_morning",
    "usage_afternoon",
    "usage_evening",
    "usage_night",
]

def deviation_features(df: pd.DataFrame, baseline: pd.Series):
    dev = pd.DataFrame()
    for col in FEATURES:
        dev[col + "_dev"] = (df[col] - baseline[col]) / (baseline[col] + 1e-6)
    return dev
