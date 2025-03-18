import express from "express"
import authRoutes from "./routes/auth.route.js"

const app = express();


app.use("/api/auth", authRoutes)

app.listen(5002, ()=>{
    console.log("Server is running!!")
})