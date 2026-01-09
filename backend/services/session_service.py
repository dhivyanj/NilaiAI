from config.database import get_db

def save_session(data):
    db = get_db()
    cur = db.cursor()

    cur.execute("""
        INSERT INTO sessions
        (user_id, login_time, session_duration, active_events, session_date)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        data["user_id"],
        data["login_time"],
        data["session_duration"],
        data["active_events"],
        data["timestamp"]
    ))

    db.commit()
    cur.close()
    db.close()
