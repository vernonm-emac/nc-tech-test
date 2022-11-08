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
