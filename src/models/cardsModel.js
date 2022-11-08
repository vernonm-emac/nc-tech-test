const fs = require("fs");

exports.selectAllCards = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./src/data/cards.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const cards = JSON.parse(data);
        resolve(cards);
      }
    });
  });
};
