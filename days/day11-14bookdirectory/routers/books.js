const express = require("express");
const router = express.Router();
const books = require("../utils/books");
const BooksService = require("../services/books");

function booksApi(app) {
  app.use("/api/books", router);

  const booksService = new BooksService();

  router.get("/", async (req, res, next) => {
    const { tags } = req.query;
    try {
        const book = await booksService.getBooks({tags});
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
        const book = await booksService.getBook({bookId});
        res.status(200).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });

  router.post("/", async (req, res, next) => {

    const body = req.body;
    try {
        const book = await booksService.putBook({body});
        res.status(201).json({
            data: book,
        });
    } catch (error) {
        next(error);
    }
  });

  router.put("/:bookId", async (req, res, next) => {
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
