const {
  getCards,
  getCardById,
  postCardById,
} = require("./controller/cards.controller");

const express = require("express");
const app = express();

app.set("json spaces", 2);

app.get("/cards", getCards);

app.get("/cards/:cardId", getCardById);

app.post("/cards/:cardId", postCardById);

app.use("*", (req, res) => {
  res.status(404).send({
    message: "does not exist",
  });
});

app.use((err, req, res, next) => {
  if (err.status && err.message) {
    res.status(400).send({
      message: err.message,
    });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({
    message: "server error",
  });
});

module.exports = app;
