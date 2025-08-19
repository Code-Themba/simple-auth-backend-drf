# Simple Auth Backend (DRF)

Full-stack authentication system with a Django REST Framework backend (JWT-based) and a Node.js/Express frontend for user management.

## Features

**Backend:**

- User registration and login
- JWT-based authentication
- Secure API endpoints
- Extensible user model

**Frontend:**

- User registration and login via REST API
- User info retrieval
- Simple Express server

## Tech Stack

**Backend:**

- Python
- Django
- Django REST Framework
- djangorestframework-simplejwt

**Frontend:**

- Node.js
- Express

## Project Structure

```
manage.py
requirements.txt
backend/
   settings.py
   urls.py
   ...
user_auth/
   models.py
   views.py
   urls.py
   ...
frontend/
   server.js
   controllers/
      userControllers.js
   routes/
      user.js
   .env
   package.json
   ...
```

## Setup Instructions

### Backend (Django)

1. **Clone the repository**
   ```powershell
   git clone <repo-url>
   cd simple-auth-backend-drf
   ```
2. **Create and activate a virtual environment**
   ```powershell
   python -m venv env
   .\env\Scripts\Activate.ps1
   ```
3. **Install dependencies**
   ```powershell
   pip install -r requirements.txt
   ```
4. **Apply migrations**
   ```powershell
   python manage.py migrate
   ```
5. **Run the backend server**
   ```powershell
   python manage.py runserver
   ```

### Frontend (Node.js)

1. **Navigate to the frontend folder**
   ```powershell
   cd frontend
   ```
2. **Install dependencies**
   ```powershell
   npm install
   ```
3. **Configure environment variables**
   - Edit `.env` to set `API_URL` (default: `http://localhost:8000`)
4. **Run the frontend server**
   ```powershell
   npm start
   ```

## API Endpoints

### Backend (Django)

- `/api/auth/register/` — Register a new user
- `/api/auth/login/` — Obtain JWT token
- `/api/auth/logout/` — Logout user (if implemented)
- Other endpoints as defined in `user_auth/urls.py`

### Frontend (Express)

- `/api/users/register/` — Proxy to backend registration
- `/api/users/login/` — Proxy to backend login
- `/api/users/me/` — Get user info

## Environment

**Backend:**

- Python 3.13+
- Django 5.2+

**Frontend:**

- Node.js 18+
- Express 5+

## License

MIT

---

For questions or contributions, open an issue or pull request.
