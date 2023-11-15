import * as express from "express";
export const app = express();

const { getAllCards } = require("../controllers/cards_controller");

app.set("json spaces", 2);

app.get(
  "/cards",
  getAllCards
  // respond with a list of cards
);

app.get("/cards/:cardId/:sizeId?", () => {
  // respond with card by id
});
