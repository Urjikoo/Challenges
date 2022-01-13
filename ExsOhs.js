// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

function XO(str) {
  //code here
  let words = str.toLowerCase();
  let xNumber = "";
  let oNumber = "";
  for (let i = 0; i < str.length; i++) {
    if (words[i].toLowerCase() === "x") {
      xNumber += words[i];
    } else if (words[i].toLowerCase() === "o") {
      oNumber += words[i];
    }
  }
  return xNumber.length === oNumber.length;
}
