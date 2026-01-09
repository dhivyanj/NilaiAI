from fastapi import APIRouter
from pydantic import BaseModel
from services.session_service import save_session

router = APIRouter(prefix="/behavior")

class Session(BaseModel):
    user_id: str
    login_time: str
    session_duration: int
    active_events: int
    timestamp: str

@router.post("/track")
def track(data: Session):
    save_session(data.dict())
    return {"message": "session saved"}
