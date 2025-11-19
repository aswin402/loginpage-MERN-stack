// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.scss";

function RegisterPage({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      alert("Registration successful!");
      setPage("login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>

        <input
          className="input-box"
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input-box"
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input-box"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-register" onClick={registerUser}>
          Register
        </button>

        <p>
          Already have an account?
          <span onClick={() => setPage("login")}> Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
