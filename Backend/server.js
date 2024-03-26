import express from "express"
import { Server } from "socket.io";
import { createServer } from "node:http";


const app = express();
const server = new createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    
  },
});



app.get('/' , (req,res) => {
    res.send("Hi this is Server");
})

io.on('connection' , (socket) => {


socket.on("chat", (payload)=>{
   
    io.emit("chat",payload);
})
})

server.listen(5000,()=>{
    console.log("Server is Listening at Port: 5000")
})
