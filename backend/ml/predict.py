import pickle
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.pkl")

def predict(X):
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)

    scores = model.decision_function(X)
    labels = model.predict(X)

    return scores.tolist(), labels.tolist()
