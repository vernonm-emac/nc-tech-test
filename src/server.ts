import * as express from "express";
const {getCards,getCard} = require('./server/controller')
const {handleErrors} = require('./server/errors.controller')

export const app = express()

app.set('json spaces', 2);

app.get('/cards', getCards)

app.get('/cards/:cardId/',getCard)

app.use(handleErrors)

app.all('/*',(req,res,next) => {
  res.status(404).send({message:'Path not found'})
})