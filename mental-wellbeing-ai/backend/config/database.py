import mysql.connector
import os

def get_db():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD", "blahblah123"),
        database=os.getenv("DB_NAME", "wellbeing_ai")
    )
