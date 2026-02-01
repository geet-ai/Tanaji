"""FastAPI application entry point."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import auth, users
from database import init_db
from shared.config import get_settings

settings = get_settings()
app = FastAPI(
    title="Tanaji",
    description="User auth and dashboard",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(users.router, prefix="/api/users", tags=["users"])


@app.on_event("startup")
async def startup():
    """Initialize database on startup."""
    init_db()


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "healthy"}
