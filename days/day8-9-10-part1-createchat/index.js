// express
const express = require("express");
const app = express();
const path = require("path");
const socketIo = require("socket.io");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
  console.log("listening in localhost:3000");
});

const io = socketIo(server);

//WEbsocket
io.on("connection", (socket) => {
  console.log("new connection");
  socket.emit("hello", "hsja");

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});
