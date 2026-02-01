# Tanaji

User auth and dashboard. Create user, login, empty dashboard.

## Build and Deploy (Docker Compose)

```bash
docker compose build
docker compose up -d
```

- **UI:** http://localhost:5173
- **API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

## Project Structure

```
tanaji/
├── api/           # FastAPI app, auth, users
├── database/      # User model, session, migrations
├── shared/        # Config
├── ui/            # React frontend (Login, Register, Dashboard)
├── docker-compose.yml
└── Dockerfile
```
