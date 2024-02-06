import * as express from "express";
import {CardControllers} from "./controllers/cards.controllers"

export const app = express()

app.set('json spaces', 2);

app.get('/cards', CardControllers.getCards)

app.get('/cards/:cardId/:sizeId?', () => {
  // respond with card by id
})
