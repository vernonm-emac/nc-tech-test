const cards = require('../data/cards.json')
const templates = require('../data/templates.json')

const { createCardResponse } = require('./models-helpers')

exports.fetchCardById = (cardId) => {
  // console.log('----- fetchCardById: ' + cardId)
  for (card of cards) {
    if (card.id === cardId) {
      const responseCard = createCardResponse(card)
      return Promise.resolve(responseCard)
    }
  }
  return Promise.reject({status: 404, message: `card ${cardId} not found`})
}