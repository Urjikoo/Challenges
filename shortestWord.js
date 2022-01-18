// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let str = s.split(" ");
  let shortestStr = str[0].length;
  for (let i = 0; i < str.length; i++) {
    let wordArr = str[i].length;
    if (wordArr < shortestStr) {
      shortestStr = wordArr;
    }
  }

  return shortestStr;
}
