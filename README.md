# Simple Auth Backend (DRF)

A Django REST Framework backend for simple user authentication using JWT (JSON Web Tokens).

## Features

- User registration and login
- JWT-based authentication
- Secure API endpoints
- Extensible user model

## Tech Stack

- Python
- Django
- Django REST Framework
- djangorestframework-simplejwt

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
```

## Setup Instructions

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
5. **Run the development server**
   ```powershell
   python manage.py runserver
   ```

## API Endpoints

- `/api/auth/register/` — Register a new user
- `/api/auth/login/` — Obtain JWT token
- `/api/auth/logout/` — Logout user (if implemented)
- Other endpoints as defined in `user_auth/urls.py`

## Environment

- Python 3.13+
- Django 5.2+

## License

MIT

---

For questions or contributions, open an issue or pull request.
