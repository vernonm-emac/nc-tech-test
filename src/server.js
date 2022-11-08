const express = require("express");
const app = express();
const { getCards } = require("./controllers/cardsController");
// const cors = require("cors");

app.use(express.json());
app.set("json spaces", 2);
// app.use(cors());

app.get("/cards", getCards);

// app.get("/cards/:cardId/", (req, res, next) => {
//   console.log(req.params);

//   // respond with card by id
// });

module.exports = app;
