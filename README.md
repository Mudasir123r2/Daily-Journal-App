# 📝 Daily Journal App (MERN Stack)

A full-featured **Daily Journal Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js). This application allows users to register, log in, and manage their daily journal entries securely and efficiently. Built with a modern UI using Tailwind CSS and optimized with React Router and Context API for smooth performance and user experience.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🧠 CRUD Operations for Journal Entries (Create, Read, Update, Delete)
- 🌓 Responsive Dark-Themed UI using Tailwind CSS
- 🛠️ RESTful API Integration
- ⚙️ Context API for Global State Management
- 📋 Form Validation using Formik + Yup
- 🌐 Axios for Client-Server Communication
- 🧪 Error Handling and JWT Authentication

## 📸 Screenshots

![Homepage](./frontend//src/assets/home.png)
![Register](./frontend/src/assets/register.png)
![Login](./frontend/src/assets/login.png)
![Dashboard](./frontend/src/assets/dashboard.png)

## 🗂️ Project Folder Structure

daily-journal-app/
├── backend/ # Node.js + Express + MongoDB API
│ ├── server.js
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── middleware/
│ └── config/
├── frontend/ # React + Tailwind UI
│ ├── src/
│ │ ├── api/
│ │ ├── assets/
│ │ ├── components/
│ │ └── context/
│ │ ├── layout/
│ │ └── pages/
│ │ ├── router/
│ │ └── schemas/
│ │ └── utils/
│ │ └── App.jsx
│ └── vite.config.js
└── README.md

## ⚙️ Tech Stack

| Tech          | Description                        |
|---------------|------------------------------------|
| React         | Frontend Library                   |
| Tailwind CSS  | Utility-First CSS Framework        |
| React Router  | SPA Routing                        |
| Node.js       | Backend Runtime                    |
| Express.js    | Web Framework for Node.js          |
| MongoDB       | NoSQL Database                     |
| Mongoose      | ODM for MongoDB                    |
| Axios         | HTTP Client                        |
| JSON Web Token| User Authentication                |


### Dependencies

📌 Backend package.json

"dependencies": {
  "bcryptjs": "^3.0.2",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "express-async-handler": "^1.2.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.14.1",
  "nodemon": "^3.1.10"
}

📌 Frontend package.json

"dependencies": {
  "@tailwindcss/vite": "^4.1.5",
  "axios": "^1.9.0",
  "formik": "^2.4.6",
  "lucide-react": "^0.513.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.5.2",
  "react-router-dom": "^7.5.3",
  "tailwindcss": "^4.1.5",
  "yup": "^1.6.1"
},
"devDependencies": {
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.3",
  "eslint-plugin-react-hooks": "^4.6.2",
  "eslint-plugin-react-refresh": "^0.4.7",
  "vite": "^5.3.4"
}

🙋‍♂️ Author : Mudasir Mujtaba (CS Student, Mern Stack enthusiast)
📧 mudasirmujtaba15@gmail.com
🔗 https://github.com/Mudasir123r2

📄 License
This project is licensed under the ISC License.

💡 Feel free to fork, improve, and use this project for learning or personal use. Contributions are welcome!



