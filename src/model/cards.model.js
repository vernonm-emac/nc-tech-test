const fs = require("fs/promises");

exports.fetchCards = () => {
  const result = [];
  return fs
    .readFile("./src/data/cards.json", "utf-8")
    .then((data) => {
      const cards = JSON.parse(data);

      return fs.readFile("./src/data/templates.json", "utf-8").then((data) => {
        const templates = JSON.parse(data);
        for (let i in cards) {
          for (let j in templates) {
            if (cards[i]["pages"][0]["templateId"] === templates[j]["id"]) {
              result.push({
                title: cards[i]["title"],
                imageUrl: templates[j]["imageUrl"],
                card_id: cards[i]["id"],
              });
            }
          }
        }

        return result;
      });
    })
    .catch((err) => {
      if (err) {
        return Promise.reject({
          message: "No cards found !!!",
          status: "400",
        });
      }
    });
};
