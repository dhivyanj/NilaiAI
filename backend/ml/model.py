from sklearn.ensemble import IsolationForest
import pickle
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.pkl")

def train_model(X):
    model = IsolationForest(
        n_estimators=200,
        contamination=0.15,
        random_state=42
    )
    model.fit(X)

    with open(MODEL_PATH, "wb") as f:
        pickle.dump(model, f)

    return model
