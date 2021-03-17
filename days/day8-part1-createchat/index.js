// express
const app = require("express")();

const server = app.listen(3000, () => {
  console.log("listening in localhost:3000");
});

const io = require("socket.io")(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
