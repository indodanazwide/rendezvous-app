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

| Frontend         | Backend          | Database | Deployment    |
|------------------|------------------|----------|----------------|
| React + Vite     | Node.js + Express| MySQL    | Vercel (FE), Railway (BE) |
| Tailwind + Sass  | REST API         |          |                |


## Getting Started

Clone the repository:
```bash
git clone https://github.com/indodanazwide/rendezvous-app.git
```

Set up frontend:
```bash
cd rendezvous-app/client
npm install
npm run dev
```

Set up backend:
```bash
cd ../server
npm install
npm run dev
```

Make sure you configure `.env` files in the `server/` directory as explained in its README.

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

## Author
**Bukeka Olwethu Nxumalo**  
`22289351` - Durban University of Technology

> This project is part of a full-stack professional solution designed for real-world deployment at DUT.

## Contributing

We welcome contributions! If you'd like to help improve the project, feel free to fork the repository, create a feature branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit and push your changes (`git commit -am 'Add new feature'`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
