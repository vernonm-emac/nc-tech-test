const express = require("express");
const { retrieveAllCards } = require("../models/cards_model");

function getAllCards(req, res) {
  retrieveAllCards().then((response) => {
    res.status(200).send(response);
  });
}

module.exports = { getAllCards };
