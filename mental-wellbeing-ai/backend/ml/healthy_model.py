from sklearn.ensemble import IsolationForest
import pickle
import os

BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "healthy_model.pkl")

def train_healthy_model(X):
    model = IsolationForest(
        n_estimators=300,
        contamination=0.1,
        random_state=42
    )
    model.fit(X)

    with open(MODEL_PATH, "wb") as f:
        pickle.dump(model, f)

    return model
