# Copyright (c) 2025 Geet-AI. All rights reserved.
# This code is proprietary and confidential.

"""Users router - profile and management."""

from fastapi import APIRouter, Depends
from pydantic import BaseModel, EmailStr

from database import get_db
from database.models import User
from api.auth.jwt import get_current_user

router = APIRouter()


class UserResponse(BaseModel):
    id: int
    email: EmailStr
    full_name: str | None

    class Config:
        from_attributes = True


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    """Get current user profile."""
    return current_user
