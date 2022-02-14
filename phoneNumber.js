// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// param is array of numbers: their 0-9
// declaring function that returns the numbers in phone number format.
// ex (0,1,2,3,4,5,6,7,8,9)=>"(012) 345-6789"
// declare a function;

// function createPhoneNumber(numbers){
// //   // declare a variable then assign it to numbers[]
// // // add parentheses and space and slash to the array.
// // //  Use a method to add the
// // let outCome= "("+numbers[0][1][2]+") "+ numbers[3][4][5]+"-"+numbers[6][7][8][9]

// //  return outCome

// // }
// // console.log(createPhoneNumber([1,2, 3, 4, 5, 6, 7, 8, 9, 0]))

function checker(s) {
  let words = s.split("");
  let middle = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < middle.length; i++) {
      if (words % 2 == 1) {
        middle = s.length % 2;
        words = 1;
      } else {
        middle = (s.length % 2) - 1;
        words = 1;
      }
    }
  }
  return middle;
}
