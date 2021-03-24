const express = require("express");
const router = express.Router();
const books = require("../utils/books");

function booksApi(app) {
  app.use("/api/books", router);
  router.get("/", async (req, res, next) => {
    const { tags } = req.query;
    try {
        const book = books;
        res.status(200).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });


  router.get("/:bookId", async (req, res, next) => {
    const { bookId } = req.params;
    try {
        const book = books.find(element => element.id = bookId);
        res.status(200).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });

  router.post("/", async (req, res, next) => {

    const { book } = req.body;

    try {
        res.status(201).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });

  router.put("/:bookId", async (req, res, next) => {
    const { bookId } = req.params;
    const { book } = req.body;
    try {
        const book = books.find(element => element.id = bookId);
        res.status(200).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });

  router.delete("/:bookId", async (req, res, next) => {
    const { bookId } = req.params;
    try {
        const book = books.find(element => element.id = bookId);
        res.status(200).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });



}

module.exports = booksApi;
