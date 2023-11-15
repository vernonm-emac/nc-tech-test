const express = require("express");
const { retrieveAllCards } = require("../models/cards_model");

function getAllCards(req, res) {
  const allCards = retrieveAllCards();

  retrieveAllCards().then((allCards) => {
    res.status(200).send(allCards);
  });
  console.log(allCards);
}

module.exports = { getAllCards };
