import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from feature_engineering import deviation_features, FEATURES

TRAIN_FILE = r"backend/data/user_logs_train_v2.csv"
TEST_FILE = r"backend/data/user_logs_test_v2.csv"

train_df = pd.read_csv(TRAIN_FILE)
test_df = pd.read_csv(TEST_FILE)

X_train_raw = train_df[FEATURES].astype(float)
X_test_raw = test_df[FEATURES].astype(float)

baseline = X_train_raw.mean()

X_train = deviation_features(X_train_raw, baseline)
X_test = deviation_features(X_test_raw, baseline)

def generate_labels(df, baseline):
    labels = []
    for _, row in df.iterrows():
        stable = 1
        if abs(row["session_duration"] - baseline["session_duration"]) > 0.25 * baseline["session_duration"]:
            stable = 0
        if abs(row["activity_count"] - baseline["activity_count"]) > 0.30 * baseline["activity_count"]:
            stable = 0
        if row["usage_night"] > 0.18:
            stable = 0
        labels.append(stable)
    return np.array(labels)

y_train = generate_labels(train_df, baseline)
y_test = generate_labels(test_df, baseline)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = RandomForestClassifier(
    n_estimators=600,
    max_depth=14,
    min_samples_leaf=2,
    min_samples_split=5,
    class_weight="balanced_subsample",
    random_state=42,
    n_jobs=-1
)

model.fit(X_train_scaled, y_train)

y_prob = model.predict_proba(X_test_scaled)[:, 1]
y_pred = (y_prob >= 0.55).astype(int)

print("Accuracy:", accuracy_score(y_test, y_pred))

# =========================
# SAVE ARTIFACTS (SAFE)
# =========================
import os

ARTIFACT_DIR = os.path.join(os.path.dirname(__file__), "artifacts")
os.makedirs(ARTIFACT_DIR, exist_ok=True)

joblib.dump(model, os.path.join(ARTIFACT_DIR, "model.pkl"))
joblib.dump(scaler, os.path.join(ARTIFACT_DIR, "scaler.pkl"))
joblib.dump(baseline, os.path.join(ARTIFACT_DIR, "baseline.pkl"))

print("✅ Model artifacts saved successfully.")

