# 🧠 Mental Well-Being AI (Phase 1)

A non-clinical, privacy-preserving system that detects **behavioral pattern changes** from a user’s interaction with a single website and provides **self-awareness insights**.

This project is designed using a **phased architecture** to ensure ethical data use, controlled machine-learning behavior, and easy extensibility.

---

## 🚀 Phase-1 Goal

> Learn a user’s **normal usage routine** from interactions on this website only,  
> then highlight **meaningful deviations** in a non-medical, explainable way.

---

## 🔒 Privacy & Ethics First

**This system DOES NOT collect:**
- Other websites activity
- Messages or content
- Location or device sensors
- Medical or clinical data

**Disclaimer (shown in UI):**
> This system does not provide medical or mental health diagnosis.  
> It highlights behavioral changes to support self-awareness only.

---

## 🧱 Architecture (Phase-1)

Frontend (Website)
↓
FastAPI Backend
↓
MySQL Database
↓
Feature Engineering
↓
ML Models
↓
Insights API
↓
Dashboard

---

## 📊 Data Collected (Phase-1 Only)

Per session:
- Login time
- Session duration
- Activity count
- Date

Daily aggregated:
- Average session duration
- Session count
- Late-night usage ratio

---

## 🧠 Machine Learning Overview

This system uses **two separate ML models**:

### 1️⃣ Personal Baseline Model
- Trained per user
- Learns the user’s **normal behavior**
- Detects deviations from their own routine

### 2️⃣ Healthy Reference Model
- Trained on **synthetic healthy behavior**
- Represents common healthy digital habits
- Used only for **contextual comparison**

No clinical diagnosis is made.

---

## 📈 Insights Provided

- Personal deviation score
- Explanation in plain language
- Comparison with healthy usage patterns
- Visual trend charts

---

## 🧪 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Chart.js
- **Backend:** FastAPI (Python)
- **Database:** MySQL
- **ML:** scikit-learn (Isolation Forest)
- **Hosting (later):** Vercel + Render

---

## 🛣️ Roadmap

- Phase-2: Browser extension (cross-site behavior)
- Phase-3: Mobile app + sensor fusion (optional)

---

## 📌 Status

✅ Phase-1 complete  
🚧 Deployment pending  
📄 Documentation ready
