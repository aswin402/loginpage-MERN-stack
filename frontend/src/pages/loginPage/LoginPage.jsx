// src/pages/LoginPage.jsx
import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.scss";

function LoginPage({ setPage, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      setToken(res.data.token);   // save token
      setPage("users");           // go to users page
      // OR if using router → navigate("/users");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          className="input-box"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input-box"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-login" onClick={loginUser}>
          Login
        </button>

        <p>
          Don't have an account?
          <span onClick={() => setPage("register")}> Register</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
