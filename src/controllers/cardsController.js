const { selectCard, selectAllCards } = require("../models/cardsModel");

exports.getCards = (req, res, next) => {
  selectAllCards()
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      next(err);
    });
};
