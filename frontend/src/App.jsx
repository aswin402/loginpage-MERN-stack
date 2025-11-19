import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:5000/api/users")
        .then(res => setUsers(res.data));
    }
  }, [token]);

  if (page === "login")
    return <LoginPage setPage={setPage} setToken={setToken} />;

  if (page === "register")
    return <RegisterPage setPage={setPage} />;

  // Users Page
  return (
    <div style={{ padding: "40px" }}>
      <h2>All Users</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
