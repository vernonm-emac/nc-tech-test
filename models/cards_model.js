const fs = require("fs/promises");

function retrieveAllCards() {
  return fs
    .readFile("src/data/cards.json", "utf-8")
    .then((fileContents) => {
      return fileContents;
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { retrieveAllCards };
