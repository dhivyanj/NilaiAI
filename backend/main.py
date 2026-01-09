from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.behavior import router as behavior_router
from routes.insights import router as insights_router

app = FastAPI(title="Wellbeing AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(behavior_router)
app.include_router(insights_router)

@app.get("/")
def health():
    return {"status": "ok"}
