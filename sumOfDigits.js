// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  // ...
  let numbers = n.toString().split("").map(Number);
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let subNumbers = sum.toString();
  if (minNumber.length > 1) {
    var sumNumbers = sumString.split("").map(Number);
    var firstSumDigit = sumNumbers.slice(0);
    var lastSumDigit = sumNumbers.slice(-1);
    return firstSumDigit[0] + lastSumDigit[0];
  } else {
    return sum;
  }
}
