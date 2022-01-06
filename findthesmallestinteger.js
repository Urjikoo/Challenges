// Given an array of integers your solution should find the smallest integer.

// We have an array called args and it has integers
// we will create a function that returns the smallest integer from args array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    console.log(Math.min(...args));

    return Math.min(...args);
  }
}
