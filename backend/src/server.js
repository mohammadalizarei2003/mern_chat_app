import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import databaseConnection from "./utils/databaseConnection.js";
import { app, server } from "./utils/socket.js";

dotenv.config();

const __dirname = path.resolve();
// // PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

const PORT = process.env.PORT || 5000;
const start = async () => {
    try {
        await databaseConnection();
        server.listen(PORT, () => {
            console.log(`Serve running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();

