import "reflect-metadata"
import express from "express"
import path from 'path'
import { createServer } from "http"
import { Server } from "socket.io"
import mongoose, { Types } from "mongoose"

const app = express()
const server = createServer(app)


mongoose.createConnection("mongodb://localhost/rocketsocket").asPromise()

app.use(express.static(path.join(__dirname, "..", "public")))

const io =  new Server(server);

io.on("connection", (socket) => console.log("socket", socket.id));

app.get("/", (req, res) => {
  return res.json({
    message: "Hello Websocket",
  });
});


export {server, io}