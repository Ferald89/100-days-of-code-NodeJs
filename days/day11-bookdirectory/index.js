// Express
const express = require("express");
const app = express();

// Config
const { config } = require("./config/index");

// utils
const books = require("./utils/books");

//Body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    datos: books[0],
  });
});

app.listen(config.port, () => {
  console.log(`Listening in localhost:${config.port}`);
});
