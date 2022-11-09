const express = require("express");
const app = express();
const {
  getCards,
  getCardByID,
  postCard,
} = require("./controllers/cardsController");

app.use(express.json());
app.set("json spaces", 2);

app.get("/cards", getCards);
app.get("/cards/:cardId", getCardByID);
app.post("/cards", postCard);

module.exports = app;
