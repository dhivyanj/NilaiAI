from config.database import get_db
from datetime import date, timedelta

def get_sessions(user_id: str, days: int):
    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT session_duration, active_events, session_date
        FROM sessions
        WHERE user_id = %s
        AND session_date >= %s
    """, (user_id, date.today() - timedelta(days=days)))

    rows = cur.fetchall()
    cur.close()
    db.close()
    return rows


def overall_score(sessions):
    if not sessions:
        return 0

    avg_duration = sum(s[0] for s in sessions) / len(sessions)
    avg_activity = sum(s[1] for s in sessions) / len(sessions)

    score = 100
    if avg_duration < 20:
        score -= 30
    if avg_activity < 5:
        score -= 30

    return max(score, 0)


def confidence_level(days):
    if days >= 30:
        return 0.9
    if days >= 7:
        return 0.7
    return 0.5


from ml.model_loader import analyze_user

def ml_summary(session_row):
    return analyze_user({
        "login_time": session_row["login_time"],
        "session_duration": session_row["session_duration"],
        "activity_count": session_row["active_events"],
        "usage_morning": 0.25,
        "usage_afternoon": 0.25,
        "usage_evening": 0.25,
        "usage_night": 0.25
    })
