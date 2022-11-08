const cards = require("./data/cards.json");
const templates = require("./data/templates.json");

exports.selectCards = async () => {
  const filteredCards = cards.map((x) => ({
    title: x.title,
    imageUrl: x.pages[0].templateId,
    card_id: x.id,
  }));

  for (x in filteredCards) {
    filteredCards[x].imageUrl = templates.find(
      (card) => card.id === filteredCards[x].imageUrl
    ).imageUrl;
  }

  return filteredCards;
};
