const fs = require("fs/promises");
const { resolve } = require("path");
const { parseSizes, sayHello } = require("../utility");

exports.selectAllCards = () => {
  const result = [];
  return fs.readFile("./src/data/cards.json", "utf-8").then((data) => {
    const cards = JSON.parse(data);

    if (cards.length === 0) {
      return Promise.reject({
        status: 404,
        msg: "No cards found",
      });
    } else {
      return fs.readFile("./src/data/templates.json", "utf-8").then((data) => {
        const templates = JSON.parse(data);
        for (let i in cards) {
          for (let j in templates) {
            if (cards[i].pages[0].templateId === templates[j].id) {
              result.push({
                title: cards[i].title,
                imageUrl: templates[j].imageUrl,
                card_id: cards[i].id,
              });
            }
          }
        }
        return result;
      });
    }
  });
};

exports.selectCard = (cardId) => {
  return this.selectAllCards()
    .then((cards) => {
      const card = cards.find((card) => {
        return card.card_id === cardId;
      });
      if (!card) {
        return Promise.reject({
          status: 404,
          msg: "Card not found",
        });
      }
      return card;
    })
    .then((card) => {
      return fs.readFile("./src/data/sizes.json", "utf-8").then((data) => {
        const sizes = JSON.parse(data);
        for (let i in sizes) {
          if (card.card_id === sizes[i].id) {
            card.availableSizes = parseSizes(sizes[i].sizes);
          }
        }
        return card;
      });
    })
    .then((card) => {
      return fs.readFile("./src/data/cards.json", "utf-8").then((data) => {
        const cards = JSON.parse(data);
        for (let i in cards) {
          if (card.card_id === cards[i].id) {
            card.pages = cards[i].pages;
            card.base_price = cards[i].basePrice;
          }
        }

        return card;
      });
    });
};
