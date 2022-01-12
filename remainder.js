// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(a, b) {
  // Divide the larger argument by the smaller argument and return the remainder
  let remainder = 0;
  if (a > b) {
    remainder = a % b;
  } else {
    remainder = b % a;
  }
  return remainder;
}
