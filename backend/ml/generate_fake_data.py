import pandas as pd
import random
from config.database import get_db
from datetime import date, timedelta

def generate_fake_data(user_id="test_user", days=21):
    db = get_db()
    cursor = db.cursor()

    today = date.today()

    for i in range(days):
        d = today - timedelta(days=i)

        avg_duration = random.randint(25, 40)
        session_count = random.randint(1, 4)
        late_ratio = random.choice([0, 0, 0.25])

        cursor.execute("""
            INSERT INTO daily_summary
            (user_id, date, avg_session_duration, session_count, late_usage_ratio)
            VALUES (%s, %s, %s, %s, %s)
        """, (
            user_id,
            d,
            avg_duration,
            session_count,
            late_ratio
        ))

    db.commit()
    cursor.close()
    db.close()
