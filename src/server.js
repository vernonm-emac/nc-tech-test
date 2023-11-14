const express = require('express')
const { getCardById } = require('./controllers/cards-controllers')


const app = express()

app.set('json spaces', 2);

app.get('/cards', async () => {
  getCardById()
})

app.get('/cards/:cardId/:sizeId?', () => {
  // respond with card by id
})

module.exports = app
