const { selectAllCards } = require("./models/cardsModel");

exports.parseSizes = (sizesArray) => {
  for (let i in sizesArray) {
    if (sizesArray[i] === "sm") {
      sizesArray[i] = { id: "sm", title: "Small" };
    } else if (sizesArray[i] === "md") {
      sizesArray[i] = { id: "md", title: "Medium" };
    } else if (sizesArray[i] === { id: "lg", title: "Large" }) {
      sizesArray[i] = "Large";
    } else if (sizesArray[i] === "gt") {
      sizesArray[i] = { id: "gt", title: "Giant" };
    }
  }
  return sizesArray;
};

// exports.createId = (currentIds) => {
//   selectAllCards()
//     .then((cards) => {
//       console.log(cards);
//       const ids = [];
//       for (let i in cards) {
//         ids.push(cards[i].card_id);
//       }
//       const newId = Math.max(...ids) + 1;
//       return newId;
//     })
//     .catch((err) => {
//       return Promise.reject(err);
//     });
// };

exports.checkId = (id) => {
  const regex = /card\d{3}/;
  if (regex.test(id)) {
    return true;
  } else {
    return false;
  }
};
