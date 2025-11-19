# LOGINPAGE-MERN-stack

* Backend (Node + Express + MongoDB + Mongoose)

* Frontend (React)

* Login → On success → Show list of all users

* Passwords hashed using bcrypt

* Auth token using JWT

## 1. Backend Setup (Node.js + Express + MongoDB)
### Project Structure
```
backend/
 ├── models/
 │    └── User.js
 ├── routes/
 │    └── auth.js
 ├── server.js
 ├── config.js
 └── package.json

```

### Install dependencies and run the app:
```bash
cd backend
npm install
node server.js # or `nodemon` if installed globally
```

` npm install express mongoose bcryptjs cors jsonwebtoken nodemon `