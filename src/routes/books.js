const express = require("express");
const { getBooks, createBook } = require("../controllers/booksController");
const router = express.Router();

router.get("/books", getBooks);
router.post("/books", createBook);

module.exports = router;
