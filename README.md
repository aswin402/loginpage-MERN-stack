# MERN Stack Authentication System

A full-stack authentication application built with MongoDB, Express.js, React, and Node.js. Features secure user registration, login with JWT tokens, and password hashing with bcrypt.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [User Flow](#user-flow)
- [Security Features](#security-features)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **User Registration**: Create new user accounts with email validation
- **Secure Login**: JWT-based authentication system
- **Password Security**: Passwords hashed with bcrypt (10 salt rounds)
- **User Dashboard**: View all registered users after login
- **Error Handling**: Comprehensive error messages and validation
- **CORS Enabled**: Cross-Origin Resource Sharing support

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken v9.0.2)
- **Password Hashing**: bcryptjs v3.0.3
- **CORS**: cors v2.8.5
- **ODM**: Mongoose v8.20.0
- **Dev Tool**: Nodemon v3.1.11

### Frontend
- **Library**: React v19.2.0
- **Build Tool**: Vite
- **HTTP Client**: Axios v1.13.2
- **Routing**: React Router v7.9.6
- **Styling**: SASS
- **Linting**: ESLint

## 📁 Project Structure

```
loginpage-MERN-stack/
├── backend/
│   ├── models/
│   │   └── User.js                 # Mongoose user schema
│   ├── routers/
│   │   └── auth.js                 # Authentication routes
│   ├── server.js                   # Express server setup
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── loginPage/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   └── LoginPage.scss
│   │   │   ├── registerPage/
│   │   │   │   ├── RegisterPage.jsx
│   │   │   │   └── RegisterPage.scss
│   │   │   └── usersPage/
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── screenshots/
│   ├── loginpage.png
│   └── all_users.png
└── README.md
```

## 📦 Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (Local or Atlas)
- **npm** or **yarn**

## 🚀 Installation

### Step 1: Clone or Download the Repository

```bash
cd loginpage-MERN-stack
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### MongoDB Connection

Update the MongoDB connection string in `backend/server.js`:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err + " MongoDB connection error"));
```

**For MongoDB Atlas (Cloud):**
```javascript
mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/loginDB")
```

### JWT Secret Key

Update the secret key in `backend/routers/auth.js`:

```javascript
const token = jwt.sign(
  { id: user._id, email: user.email },
  "your_secret_key",  // Change this to a strong secret
  { expiresIn: "24h" }
);
```

## ▶️ Running the Application

### Start MongoDB (if using local instance)

```bash
mongod
```

### Start Backend Server

```bash
cd backend
npm run server
```

Expected output:
```
Server running on PORT 5000
MongoDB Connected
```

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v... ready in ... ms

➜  Local:   http://localhost:5173/
```

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Result:** Creates optimized build in `frontend/dist/` folder

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### 1. Register User

**POST** `/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400`: All fields are required
- `400`: User already exists
- `500`: Server error

---

### 2. Login User

**POST** `/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- `400`: Email and password are required
- `401`: Invalid email or password
- `500`: Server error

---

### 3. Get All Users

**GET** `/users`

**Success Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

**Note:** Passwords are excluded from the response for security

## 📸 Screenshots

### Login Page
![Login Page](./screenshots/loginpage.png)

### All Users Dashboard
![All Users](./screenshots/all_users.png)

## 🔄 User Flow

```
┌─────────────────┐
│   User Opens    │
│   Application   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Login Page    │
│  (or Register)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Submit Creds   │────▶│ Backend Validates│
└────────┬────────┘     └────────┬─────────┘
         │                       │
         │         ┌─────────────┘
         │         │
         ▼         ▼
    ┌─────────────────────┐
    │  Token Generated    │
    │  (JWT)              │
    └────────┬────────────┘
             │
             ▼
    ┌─────────────────────┐
    │  Users Dashboard    │
    │  (All Users List)   │
    └─────────────────────┘
```

## 🔒 Security Features

| Feature | Implementation |
|---------|-----------------|
| **Password Hashing** | Bcryptjs with 10 salt rounds |
| **Authentication** | JWT tokens with 24h expiration |
| **Input Validation** | Required field checking on backend |
| **Unique Email** | MongoDB unique index on email field |
| **Error Messages** | Generic messages for failed login (no user enumeration) |
| **CORS** | Enabled for cross-origin requests |
| **Password Visibility** | Hidden from API responses |

## 🐛 Troubleshooting

### MongoDB Connection Error

**Problem:** `MongoDB connection error`

**Solution:**
- Ensure MongoDB is running: `mongod`
- Check connection string in `backend/server.js`
- Verify MongoDB URI format

### CORS Error

**Problem:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- CORS is already enabled in `backend/server.js`
- Ensure frontend URL matches CORS configuration
- Check API endpoint URL in frontend

### Port Already in Use

**Problem:** `Error: listen EADDRINUSE :::5000`

**Solution:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or change port in backend/server.js
app.listen(5001, () => console.log("Server running on PORT 5001"));
```

### Blank Page on Frontend

**Problem:** Blank screen appears

**Solution:**
- Check browser console for errors (F12)
- Verify backend is running on port 5000
- Check API endpoint URLs match backend routes
- Clear browser cache and reload

### Password Not Validating on Login

**Problem:** Always shows "Invalid email or password"

**Solution:**
- Ensure password was hashed during registration
- Verify bcrypt version compatibility
- Check if user exists in MongoDB

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [Bcryptjs NPM](https://www.npmjs.com/package/bcryptjs)

## 📝 License

This project is provided as-is for educational purposes.

---

**Created with ❤️ | MERN Stack Authentication**
