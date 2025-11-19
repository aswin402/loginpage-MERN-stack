import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routers/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err+" MongoDB connection error"));

app.use("/api", authRoutes);

app.listen(5000, () => console.log("Server running on PORT 5000"));
