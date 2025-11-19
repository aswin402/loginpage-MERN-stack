import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register =============================================================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed
    });

    res.json({ message: "User created", user });
    console.log("User registered:", user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Login =============================================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid email" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "1h" });
  console.log("User logged in:", user);
  res.json({ message: "Logged in", token });
});




// Get all users (protected) =============================================================
router.get("/users", async (req, res) => {
  const users = await User.find({}, { password: 0 });
  console.log("All users retrieved:", users);
  res.json(users);
});

export default router;
