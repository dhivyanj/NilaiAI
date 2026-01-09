from config.database import get_db

def aggregate_daily(user_id: str, date: str):
    db = get_db()
    cur = db.cursor()

    cur.execute("""
        SELECT
            COUNT(*) AS session_count,
            AVG(session_duration) AS avg_session_duration,
            SUM(
                CASE WHEN EXTRACT(HOUR FROM login_time) >= 22
                THEN 1 ELSE 0 END
            )::float / COUNT(*) AS late_usage_ratio
        FROM sessions
        WHERE user_id = %s AND session_date = %s
    """, (user_id, date))

    row = cur.fetchone()
    if row[0] == 0:
        return

    cur.execute("""
        INSERT INTO daily_summary
        (user_id, date, avg_session_duration, session_count, late_usage_ratio)
        VALUES (%s, %s, %s, %s, %s)
    """, (user_id, date, row[1], row[0], row[2]))

    db.commit()
    cur.close()
    db.close()
