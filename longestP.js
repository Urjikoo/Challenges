// // Given a string s, return the longest palindromic substring in s.

// // Example 1:

// // Input: s = "babad"
// // Output: "bab"
// // Explanation: "aba" is also a valid answer.

let s = "babaas";
function palindrom(s) {
  for (let m = s.length; m > 0; m--) {
    let i = 0;
    let j = m;
    console.log(j);
    while (j <= s.length) {
      let substr = s.substring(i, j);
      console.log(substr);
      if (isPalindrome(substr)) {
        return substr;
      } else {
        i++;
        j++;
      }
    }
  }
  return "";
}
let isPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    } else {
      l++, r--;
    }
  }
  return true;
};
console.log(palindrom(s));
