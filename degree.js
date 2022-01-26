// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

var findShortestSubArray = function (nums) {
  let numCount = new Map();
  nums.forEach((num) => {
    let counter = numCount.get(num);
    if (counter) {
      counter++;
      numCount.set(num, counter);
    } else {
      counter = 1;
      numCount.set(num, counter);
    }
  });
  //console.log(numCount)
  let degreeArr = [];
  for (entry of numCount) {
    //console.log(entry)
    degreeArr.push(entry);
  }

  degreeArr.sort((a, b) => b[1] - a[1]);
  console.log(degreeArr);
  let degree = degreeArr[0][1];
  degreeArr = degreeArr.filter((el) => el[1] === degree);
  console.log(degreeArr);
  let min = nums.length;
  for (let i = 0; i < degreeArr.length; i++) {
    let num = degreeArr[i][0];
    //console.log(num)
    let first = nums.indexOf(num);
    let last = nums.lastIndexOf(num);
    let minLength = last - first + 1;
    console.log(num, first, last, minLength);
    if (minLength < min) {
      min = minLength;
    }
  }
  return min;
  // console.log(max,maxDegreeValue)
};

console.log(findShortestSubArray([3, 1, 3, 7, 5, 2, 7]));
