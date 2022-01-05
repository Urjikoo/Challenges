// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"

// Note: You can expect all of the inputs to be the same length.

// there will be 3 strings with groups of letters
// the first letter of each group will be added and be put at the beginning of the new string

function threeStrings(stringOne, stringTwo, stringThree) {
  let newString = [];
  let s1 = stringOne.split("");
  let s2 = stringTwo.split("");
  let s3 = stringThree.split("");

  console.log(s1, "=s1", s2, "=s2", s3, "=s3");

  for (let i = 0; i < s1.length; i++) {
    newString += s1[i] + s2[i] + s3[i];
  }
  console.log(newString, "= new string");
}
