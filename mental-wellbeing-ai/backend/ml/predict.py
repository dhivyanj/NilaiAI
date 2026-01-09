import pickle
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")

def predict(X):
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)

    scores = model.decision_function(X)
    labels = model.predict(X)  # -1 = deviation, 1 = normal

    return scores.tolist(), labels.tolist()
