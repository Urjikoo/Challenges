// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
// we have an array called birds that contain birds names
// the other array we have is geese that contains specific birds\

// write a function that filters geese elements from birds array

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  filteredBirds = birds.filter((i) => !geese.includes(i));
  console.log(filteredBirds);
  return filteredBirds;
  // return an array containing all of the strings in the input array except those that match strings in geese
}
