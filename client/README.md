# Rendezvous Restaurant Frontend

This is the **frontend** of the Rendezvous Restaurant web application — a modern, clean, and responsive single-page app built using **React**, **Vite**, and styled with **Tailwind CSS** + **Sass**. It serves as the main interface for users to browse the menu, make reservations, check events, and give feedback.

## ⚙️ Tech Stack
- React (with Vite)
- Tailwind CSS (configured with Sass)
- Axios
- React Router DOM
- ESLint (custom setup)

## 🔧 Getting Started

1. Clone the repository and navigate to the frontend:

```bash
git clone https://github.com/indodanazwide/rendezvous-app.git
cd rendezvous-app/client
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the app on [http://localhost:5173](http://localhost:5173) by default.

## 📁 Folder Structure

```
client/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (Menu, Reservations, Events, etc.)
│   ├── styles/           # Sass styles if needed
│   ├── App.jsx           # Main App entry
│   └── main.jsx          # App bootstrap
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind config
├── vite.config.js        # Vite config
├── eslint.config.js      # ESLint rules
└── README.md             # This file
```

## ✨ Planned Features
- Dynamic menu display
- Online reservation form
- Event calendar + RSVP system
- Feedback form
- Mobile-first design

## 🌐 Deployment (Recommended)
Use [**Vercel**](https://vercel.com/) for fast and hassle-free deployment. Just connect the GitHub repo, select the `client` folder as the root, and it handles the rest.

## 🪪 License
[MIT](../LICENSE)

---
