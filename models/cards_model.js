const fs = require("fs/promises");

function retrieveAllCards() {
  return fs
    .readFile("src/data/cards.json", "utf-8")
    .then((fileContents) => {
      const cards = JSON.parse(fileContents);
      return cards;
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { retrieveAllCards };
