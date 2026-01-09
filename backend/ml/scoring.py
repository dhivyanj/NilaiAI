def mental_health_score(row, baseline):
    score = 100

    if abs(row["session_duration"] - baseline["session_duration"]) > 0.25 * baseline["session_duration"]:
        score -= 20

    if abs(row["activity_count"] - baseline["activity_count"]) > 0.30 * baseline["activity_count"]:
        score -= 20

    if row["usage_night"] > 0.18:
        score -= 20

    if row["usage_evening"] + row["usage_night"] > 0.50:
        score -= 10

    return max(score, 0)
