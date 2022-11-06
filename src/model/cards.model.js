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
      console.log(err);
      if (err) {
        return Promise.reject({
          message: "No cards found !!!",
          status: "400",
        });
      }
    });
};

exports.fetchCardById = (cardId) => {
  if (cardId.startsWith("card")) {
    let result = [];
    return fs.readFile("./src/data/cards.json", "utf-8").then((data) => {
      const cards = JSON.parse(data);

      const cardFound = cards.filter((card) => card.id === cardId);
      if (cardFound.length === 0) {
        return Promise.reject({
          message: "card id not found !!",
          status: 404,
        });
      } else {
        return fs
          .readFile("./src/data/templates.json", "utf-8")
          .then((data) => {
            const templates = JSON.parse(data);

            let availableSizes = [];

            for (let j in templates) {
              if (
                cardFound[0]["pages"][0]["templateId"] === templates[j]["id"]
              ) {
                cardFound[0]["sizes"].forEach((size, i) => {
                  availableSizes.push({ id: size });
                }),
                  result.push({
                    title: cardFound[0]["title"],
                    imageUrl: templates[j]["imageUrl"],
                    card_id: cardFound[0]["id"],
                    base_price: cardFound[0]["basePrice"],
                    availableSizes: availableSizes,
                    pages: cardFound[0]["pages"],
                  });
              }
            }

            return result;
          });
      }
    });
  } else {
    return Promise.reject({
      message: "invalid id",
      status: 400,
    });
  }
};
