from fastapi import APIRouter
from services.aggregation_service import get_sessions, overall_score, confidence_level
from ml.model_loader import analyze_user

router = APIRouter(prefix="/api", tags=["Dashboard"])

@router.get("/overview")
def overview(user_id: str, period: int = 7):
    sessions = get_sessions(user_id, period)

    if not sessions:
        return {
            "score": 0,
            "status": "insufficient data",
            "confidence": 0.3,
            "last_analyzed": "N/A"
        }

    last = sessions[-1]

    ml_result = analyze_user({
        "login_time": 10.0,
        "session_duration": last[0],
        "activity_count": last[1],
        "usage_morning": 0.3,
        "usage_afternoon": 0.3,
        "usage_evening": 0.2,
        "usage_night": 0.2
    })

    return {
        "score": ml_result["score"],
        "status": ml_result["status"],
        "confidence": confidence_level(period),
        "last_analyzed": f"last {period} days"
    }


@router.get("/patterns")
def patterns(user_id: str, period: int = 7):
    sessions = get_sessions(user_id, period)

    if not sessions:
        return {}

    durations = [s[0] for s in sessions]
    activities = [s[1] for s in sessions]

    return {
        "sleep_regularity": {
            "value": int(sum(durations) / len(durations)),
            "status": "stable"
        },
        "activity_engagement": {
            "value": min(100, sum(activities) * 5),
            "status": "declining" if sum(activities) < 10 else "stable"
        },
        "social_interaction": {
            "value": 65,
            "status": "stable"
        },
        "daily_routine": {
            "value": 80,
            "status": "improving"
        }
    }
