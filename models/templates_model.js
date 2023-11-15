// const fs = require("fs/promises");

// function retrieveAllTemplates() {
//   return fs
//     .readFile("src/data/templates.json", "utf-8")
//     .then((fileContents) => {
//       return fileContents;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// module.exports = { retrieveAllTemplates };

const fs = require("fs/promises");

function retrieveAllTemplates() {
  return fs
    .readFile("src/data/templates.json", "utf-8")
    .then((fileContents) => {
      const templates = JSON.parse(fileContents);
      return templates;
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { retrieveAllTemplates };
