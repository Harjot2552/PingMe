import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import messageRoute from "./routes/message.route.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser())

app.use(
    cors({
    origin: 'http://localhost:5173',
    credentials: true
})
)
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoute)

app.listen(PORT, ()=>{
    console.log("Server is running!!")
    connectDB();
})