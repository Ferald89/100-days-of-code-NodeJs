// Express
const express = require("express");
const app = express();

// Config
const { config } = require("./config/index");

// local
const booksApi = require("./routers/books");

//Body parser
app.use(express.json());

booksApi(app);

app.listen(config.port, () => {
  console.log(`Listening in localhost:${config.port}`);
});
