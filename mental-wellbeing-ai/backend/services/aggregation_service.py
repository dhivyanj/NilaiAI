from config.database import get_db

def aggregate_daily(user_id: str, date: str):
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute("""
        SELECT
            COUNT(*) AS session_count,
            AVG(session_duration) AS avg_session_duration,
            SUM(CASE WHEN HOUR(login_time) >= 22 THEN 1 ELSE 0 END) / COUNT(*) AS late_usage_ratio
        FROM sessions
        WHERE user_id = %s AND session_date = %s
    """, (user_id, date))

    row = cursor.fetchone()

    if row["session_count"] == 0:
        return

    cursor.execute("""
        INSERT INTO daily_summary
        (user_id, date, avg_session_duration, session_count, late_usage_ratio)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        user_id,
        date,
        row["avg_session_duration"],
        row["session_count"],
        row["late_usage_ratio"]
    ))

    db.commit()
    cursor.close()
    db.close()
