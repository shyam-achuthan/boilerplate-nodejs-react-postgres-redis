# Node.js React PostgreSQL Redis Boilerplate

A production-ready boilerplate for building web applications with Node.js, React, PostgreSQL, and Redis.

## Features

- **Backend**: Node.js with Express
- **Frontend**: React with Material UI
- **Database**: PostgreSQL with Sequelize ORM
- **Caching**: Redis
- **Containerization**: Docker and Docker Compose setup
- **Development**: Hot reloading for both frontend and backend

## Project Structure

```
├── src/
│   ├── backend/             # Node.js Express backend
│   │   ├── node_modules/
│   │   ├── src/
│   │   │   ├── config/      # Configuration files
│   │   │   ├── controllers/ # API controllers
│   │   │   ├── middleware/  # Express middleware
│   │   │   ├── models/      # Sequelize models
│   │   │   ├── routes/      # API routes
│   │   │   ├── utils/       # Utility functions
│   │   │   ├── app.js       # Express app setup
│   │   │   └── server.js    # Server entry point
│   │   ├── .env             # Environment variables
│   │   └── package.json     # Backend dependencies
│   │
│   └── frontend/            # React frontend
│       ├── node_modules/
│       ├── public/
│       ├── src/
│       │   ├── components/  # Reusable UI components
│       │   ├── pages/       # Page components
│       │   ├── services/    # API service layer
│       │   ├── store/       # Redux store and slices
│       │   ├── utils/       # Utility functions
│       │   ├── App.js       # Main application component
│       │   └── index.js     # Application entry point
│       ├── .env             # Environment variables
│       └── package.json     # Frontend dependencies
│
└── devops/                  # DevOps configuration
    ├── backend.Dockerfile   # Backend Docker configuration
    ├── frontend.Dockerfile  # Frontend Docker configuration
    └── docker-compose.yml   # Docker Compose configuration
```

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/shyam-achuthan/boilerplate-nodejs-react-postgres-redis.git
   cd boilerplate-nodejs-react-postgres-redis
   ```

2. Start the application:
   ```bash
   cd devops
   docker-compose up
   ```

That's it! The application will be available at:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000
- pgAdmin: http://localhost:5050 (email: admin@example.com, password: admin)

## Development

### Backend Development

The backend is a Node.js application using Express. It includes:
- Sequelize ORM for PostgreSQL
- Redis for caching
- JWT authentication
- Express middleware for security

### Frontend Development

The frontend is a React application built with:
- Material UI for components
- Redux Toolkit for state management
- React Router for routing
- Axios for API requests

## Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=development
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mydatabase_dev
DB_HOST=postgres
REDIS_URL=redis://redis:6379
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1d
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3000/api
```

## Deployment

For production deployment:

1. Update environment variables for production
2. Build Docker images with production configurations
3. Deploy using Docker Compose or Kubernetes

## License

This project is licensed under the MIT License - see the LICENSE file for details.
