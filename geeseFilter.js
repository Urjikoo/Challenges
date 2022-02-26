// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//   filteredBirds = birds.filter((i) => !geese.includes(i));
//   console.log(filteredBirds);
//   return filteredBirds;
//   // return an array containing all of the strings in the input array except those that match strings in geese
// }
function findDecending(birds) {
  let num = [22, 33, 44, 55];
  let filterd = birds.filter((i) => !num.includes(i));
  return filterd;
}
findDecending([2, 22, 3, 33]);

let birdsArr = birds.filter((i) => !meme.includes(i));
birds.filter((i) => !mono(i));

function dec(num) {
  let decending = +(num + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
  return decending;
}
