# Rendezvous Restaurant Web Application

A full-stack web application for **Rendezvous Restaurant** built to streamline operations such as reservations, menu display, order management, feedback collection, and business intelligence (BI) dashboards. This project is developed using modern web technologies including **React**, **Node.js**, **Express**, and **MySQL**.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The purpose of this project is to create a comprehensive and user-friendly web application for **Rendezvous Restaurant**. Key features include:

- Dynamic menu showcasing current offerings
- Online reservation system with confirmation notifications
- Event calendar with RSVP capabilities
- Customer feedback form for reviews and ratings

## Technologies Used

- **Frontend**:
  - React.js with Vite for fast build times and a modern JavaScript framework.
  - Tailwind CSS for utility-first styling and responsive design.
  
- **Backend**:
  - Node.js with Express for the server-side logic and RESTful API.
  - MySQL for data storage (e.g., menu items, reservations, feedback).
  
- **Deployment**:
  - Frontend: Vercel or Netlify (choose based on preference).
  - Backend: Render, Railway, or Heroku (choose based on preference).
  - Database: Render or Railway for a managed MySQL service.

## Setup Instructions

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/indodanazwide/rendezvous-restaurant.git
   cd rendezvous-restaurant/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend should be running at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database connection in `.env` (example below):
   ```plaintext
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=rendezvous
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend API should be running at `http://localhost:5000`.

## Database Setup

1. Create a MySQL database:
   ```sql
   CREATE DATABASE rendezvous;
   ```

2. Create the necessary tables in the database.

3. Ensure your `.env` file is correctly configured with your MySQL credentials.

## Deployment

- **Frontend Deployment**: You can deploy the frontend on [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com) for seamless CI/CD integration with GitHub.
  
- **Backend Deployment**: The backend can be deployed on platforms like [Render](https://render.com), [Railway](https://railway.app), or [Heroku](https://www.heroku.com).
  
- **Database**: Use a managed MySQL database from [Render](https://render.com), [Railway](https://railway.app), or another service.

## Project Structure

The project is organized as follows:

```
rendezvous-restaurant/
├── backend/             # Backend (Node.js + Express)
│   ├── server.js        # Express server
│   ├── package.json     # Backend dependencies
│   ├── .env             # Environment variables
├── frontend/            # Frontend (React + Vite + Tailwind CSS)
│   ├── src/             # React components
│   ├── public/          # Public assets
│   ├── package.json     # Frontend dependencies
│   ├── tailwind.config.js
└── README.md            # Project documentation
```

## Contributing

We welcome contributions! If you'd like to help improve the project, feel free to fork the repository, create a feature branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit and push your changes (`git commit -am 'Add new feature'`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
