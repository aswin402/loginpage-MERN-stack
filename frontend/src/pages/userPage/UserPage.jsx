import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UsersPage.scss";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to load users", err);
    }
  };

  return (
    <div className="users-container">
      <h2>All Registered Users</h2>

      <div className="users-list">
        {users.map((u) => (
          <div className="user-card" key={u._id}>
            <p><strong>Name:</strong> {u.username}</p>
            <p><strong>Email:</strong> {u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
