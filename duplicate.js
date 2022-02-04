// 217. Contains Duplicate

// Add to List

// Share
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

var containsDuplicate = function (nums) {
  let duplicate = true;
  const newNums = [...new Set(nums)];
  if (newNums.length == nums.length) {
    duplicate = false;
  } else {
    duplicate = true;
  }
  return duplicate;
};
