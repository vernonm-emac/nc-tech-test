const express = require("express");
const app = express();
const { getCards, getCardByID } = require("./controllers/cardsController");

app.use(express.json());
app.set("json spaces", 2);

app.get("/cards", getCards);
app.get("/cards/:cardId", getCardByID);

// app.get("/cards/:cardId/", (req, res, next) => {
//   console.log(req.params);

//   // respond with card by id
// });

module.exports = app;
