const cards = require('../data/cards.json')
const templates = require('../data/templates.json')


exports.fetchCardById = (cardId) => {
  // console.log('----- fetchCardById: ' + cardId)

  for (card of cards) {
    if (card.id === cardId) {
      return Promise.resolve(card)
    }
  }
}