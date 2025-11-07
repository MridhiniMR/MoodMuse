# MoodMuse — Full Project (Frontend + Backend)

## What's included
- frontend: Vite + React app (in /frontend)
- backend: Node.js + Express + MongoDB (in /backend)
- seed data for moods in backend/seedData/moods.json
- .env.example for backend

## Quick setup

### Backend
1. cd backend
2. copy .env.example to .env and set MONGO_URI and JWT_SECRET
3. npm install
4. npm run dev
Server runs on port 5000 by default.

### Frontend
1. cd frontend
2. npm install
3. npm run dev
Open http://localhost:3000

Notes:
- This is a demo-ready project. For production, enable HTTPS, proper CORS and environment config.
- The frontend uses the backend at http://localhost:5000 by default.
