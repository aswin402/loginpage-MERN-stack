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

` npm install express mongoose bcryptjs cors jsonwebtoken`

### install nodemon as dev dependency to avoid restarting node server every time you make changes in code.
`npm install --save-dev nodemon`

### Run the app with nodemon
`npm run server`



## 2. Frontend Setup (React)


## 🎉 Flow
1. User opens /login
2. Enters email/password → backend verifies
3. On success → React switches to All Users page
4. Shows all users from MongoDB

Simple, clean MERN authentication + dashboard.
