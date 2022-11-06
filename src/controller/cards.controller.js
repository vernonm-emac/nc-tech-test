const {
  fetchCards,
  fetchCardById,
  addCardById,
} = require("../model/cards.model");

exports.getCards = (req, res, next) => {
  fetchCards()
    .then((data) => {
      res.status(200).send({
        cards: data,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCardById = (req, res, next) => {
  const { cardId } = req.params;

  fetchCardById(cardId)
    .then((data) => {
      res.status(200).send({
        card: data[0],
      });
    })
    .catch((err) => {
      next(err);
    });
};
exports.postCardById = (req, res, next) => {
  const { cardId } = req.params;

  addCardById(cardId)
    .then((data) => {
      res.status(200).send({
        card: data[0],
      });
    })
    .catch((err) => {
      next(err);
    });
};
