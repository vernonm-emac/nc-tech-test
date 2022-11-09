const {
  selectCard,
  selectAllCards,
  insertCard,
} = require("../models/cardsModel");

exports.getCards = (req, res, next) => {
  selectAllCards()
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCardByID = (req, res, next) => {
  const { cardId } = req.params;
  selectCard(cardId)
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      next(err);
    });
};

exports.postCard = (req, res, next) => {
  const { title, imageUrl, card_id, base_price, availableSizes } = req.body;
  insertCard(title, imageUrl, card_id, base_price, availableSizes)
    .then((card) => {
   
      res.status(201).send(card);
    })
    .catch((err) => {
      next(err);
    });
};
