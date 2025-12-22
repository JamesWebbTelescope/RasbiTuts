# Copilot instructions — RaspberryPiTutorials_uge10_11

Short, actionable guidance for AI coding agents working in this repository.

- Purpose: Backend (Flask REST API) lives in `src/`; frontend (React + Vite) lives in `frontend/`.
- Config: runtime values come from `config.json` (db_host, db_user, db_password, api_host, api_port, debug, swagger_ui).

Big picture
- `src/app.py`: Flask app factory. Serves static files (note: `static_folder` currently set to `..\\lager-frontend\\dist` — repository frontend folder is `frontend`; update if you serve from this repo).
- `src/apis/__init__.py`: registers namespaces: `/api/auth`, `/api/student`, `/api/tutorials`. Swagger UI exposed at `/docs` when enabled in `config.json`.
- `src/database_commands/`: DB model wrappers (`StudentModel`, `TutorialModel`, `AdminModel`) and `DatabaseManager` which creates DB connections (uses `mysql-connector`). Methods exposed by models: `GetAll`, `Create`, `Update`, `Delete`.
- Frontend expects a base URL string and calls endpoints via `frontend/src/services/apiService.tsx` (examples: `GET ${url}/api/tutorials`, `GET ${url}/api/tutorials/external?url=...`, `GET ${url}/api/student`).

Developer workflows (explicit)
- Backend (Windows PowerShell):
  ```powershell
  python -m venv .venv
  .\.venv\Scripts\Activate.ps1
  pip install -r requirements.txt
  python src/app.py
  ```
- Frontend (Vite dev server):
  ```bash
  cd frontend
  npm install
  npm run dev    # runs on http://localhost:5173 by default
  ```
- Frontend production build (note Windows `cp` caveat): `npm run build` runs `vite build && cp dist/index.html dist/404.html`.
  - On Windows PowerShell replace `cp` with `Copy-Item -Path dist/index.html -Destination dist/404.html` or run `npm run build` in Git Bash.
- Docker: `docker compose up --build` maps container port 8000 to host 8000 per `compose.yaml`.

Project-specific patterns & gotchas
- Namespaced API creation: each `src/apis/*.py` exposes a `create_api_*` function returning a `Namespace`; these are added in `src/apis/__init__.py`. When adding endpoints, follow this factory pattern.
- DB usage: `DatabaseManager` is passed to API factories and stored on the manager as `.students`, `.tutorials`, `.admin`. Call model methods on those objects (e.g., `db_manager.tutorials.GetAll()`).
- CORS & ports: `app.py` enables CORS only for `http://localhost:5173` — keep that in sync with Vite dev server or add origins.
- Config file: `config.json` must exist in repo root for `ReadConfigFile()` to succeed; failing to provide it will print an error and `create_app()` may fail.
- Static serve path mismatch: update `app.static_folder` to `frontend/dist` if you intend to serve the in-repo frontend build.

Integration points & dependencies
- MySQL: `requirements.txt` includes `mysql-connector-python` and `mariadb` — runtime uses `mysql.connector`. Ensure the DB server at `config.json` `db_host` is reachable (example: `raspberrypi.local`).
- Frontend: `gh-pages` is configured for GitHub Pages; build step copies `index.html` to `404.html` for single-page routing.
- Auth: `src/apis/auth.py` and `Flask-JWT-Extended` exist but JWT initialization is commented out in `app.py`. Check `apis/auth.py` for how `authorizations` are declared for swagger docs.

Examples for quick testing
- GET tutorials (backend running on localhost:8000):
  ```bash
  curl http://localhost:8000/api/tutorials
  ```
- Swagger UI (if `swagger_ui:true`): `http://localhost:8000/docs`

Editing guidance for AI agents
- Make only small, focused changes; follow existing factory patterns in `src/apis` and the `DatabaseManager` API.
- When changing server/static paths or build scripts, add a short note in `README.md` explaining platform-specific commands (Windows PowerShell vs Git Bash).

If anything above is unclear or you want me to expand examples (curl payloads, add `config.json` templates, or update `app.py` static path), tell me which section to iterate on.
