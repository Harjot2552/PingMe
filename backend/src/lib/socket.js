import {Server} from "socket.io"
import http from "http"
import express from "express"

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: ["http://localhost:5173"],
    }
})

const userSocketMap = {}

io.on("connection", (socket)=>{
    console.log("A user is connected", socket.id)
    const userId = socket.handshake.query.userId;
    if(userId) userSocketMap[userId] = socket.id

    socket.on("disconnect", ()=>{
        console.log("A user is disconnected", socket.id)
    })

})

export {io, server, app};