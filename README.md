# Django + React Task Management Application

A fullstack task management application built with Django REST Framework backend and React + Vite frontend.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Real-time error handling and feedback
- Modern responsive UI
- RESTful API backend

## Tech Stack

### Backend
- Django 5.1.3
- Django REST Framework
- MySQL Database
- django-cors-headers for CORS support

### Frontend
- React 18
- Vite
- Axios for API calls
- CSS Modules for styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8+
- Node.js 14+
- MySQL Server
- Git

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aws-django-fullstack-site
```

2. Set up the backend:
```bash
cd backend
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your MySQL credentials:
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=3306

# Run migrations
python manage.py migrate

# Create a superuser (admin)
python manage.py createsuperuser
# Follow the prompts to create your admin account:
# - Enter your desired username
# - Enter your email address
# - Enter and confirm your password

# Start the Django server
python manage.py runserver
```

3. Set up the frontend:
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create a new task
- `GET /api/tasks/{id}/` - Retrieve a specific task
- `PATCH /api/tasks/{id}/` - Update a task
- `DELETE /api/tasks/{id}/` - Delete a task

## Development

To start development:

1. Backend development server:
```bash
cd backend
python manage.py runserver
```

2. Frontend development server:
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8000`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Django REST Framework for the powerful API toolkit
- Vite for the lightning-fast frontend tooling
- React for the UI library

## Admin Interface

The Django admin interface is available at `http://localhost:8000/admin`. You can use this interface to:
- Manage tasks directly through the admin panel
- Create, edit, and delete user accounts
- Monitor and manage the application's data

To access the admin interface:
1. Navigate to `http://localhost:8000/admin`
2. Log in with your superuser credentials (created during installation)
3. You'll have full administrative access to all models and data 