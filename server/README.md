# Rendezvous Restaurant Backend

This is the backend of the Rendezvous Restaurant web application, built using **Node.js** and **Express**. It handles all server-side logic such as reservations, feedback, menu management, and event listings. It communicates with a **MySQL** database and serves as the backbone of the entire app.

## 📦 Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv
- nodemon (for development)

## 🔧 Setup Instructions

1. Clone the repository (if not done already):

```bash
git clone https://github.com/indodanazwide/rendezvous-app.git
cd rendezvous-app/server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `/server` folder with the following content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=rendezvous
PORT=5000
```

4. Start the development server:

```bash
npm run dev
```

This uses `nodemon` to auto-restart on file changes.

## 🚀 Available Endpoints (Coming Soon)
- `GET /api/menu`
- `POST /api/reservations`
- `GET /api/events`
- `POST /api/feedback`

## 🧪 Testing
Use Postman or Insomnia to test API endpoints after running the server.

## 🪪 License
[MIT](../LICENSE)

---
