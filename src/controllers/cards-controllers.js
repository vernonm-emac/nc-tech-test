const { fetchCardById } = require('../models/cards-models')

exports.getCardById = (req, res) => {
  // console.log('----- getCardById')

  const { cardId } = req.params
  fetchCardById(cardId)
  .then((card) => {
    res.status(200).send(card)
  })
}