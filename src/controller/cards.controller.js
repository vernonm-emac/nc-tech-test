const { fetchCards } = require("../model/cards.model");

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
