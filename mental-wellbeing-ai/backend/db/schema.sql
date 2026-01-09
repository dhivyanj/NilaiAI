CREATE DATABASE IF NOT EXISTS wellbeing_ai;
USE wellbeing_ai;

CREATE TABLE sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(100),
    login_time TIME,
    session_duration INT,
    active_events INT,
    session_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE daily_summary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(100),
    date DATE,
    avg_session_duration FLOAT,
    session_count INT,
    late_usage_ratio FLOAT
);
