// const express = require("express");
// const {
//   retrieveAllCards,
//   retrieveAllTemplates,
// } = require("../models/cards_model");

// function getAllCards(req, res) {
//   const allCards = retrieveAllCards()
//     .then((allCards) => {
//       res.status(200).send(allCards);
//       return allCards;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   const allTemplates = retrieveAllTemplates()
//     .then((allTemplates) => {
//       return allTemplates;
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   Promise.all([allCards, allTemplates]).then(console.log(allCards, "allcards"));
// }
const express = require("express");
const { retrieveAllCards } = require("../models/cards_model");
const { retrieveAllTemplates } = require("../models/templates_model");
async function getAllCards(req, res, next) {
  try {
    const allCards = await retrieveAllCards();
    const allTemplates = await retrieveAllTemplates();
    const responseObject = allCards.map((card) => {
      const correctTemplate = allTemplates.find((template) => {
        return template.id === card.pages[0].templateId;
      });

      return {
        title: card.title,
        imageUrl: correctTemplate.imageUrl,
        card_id: card.id,
      };
    });

    res.status(200).send(responseObject);
  } catch (error) {
    next(error);
    // console.log(err);
    // res.status(500).send("Internal Server Error");
  }
}

module.exports = { getAllCards };
