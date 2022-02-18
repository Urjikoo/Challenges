// // Given a string s, return the longest kalindromic substring in s.

// // Examkle 1:

// // Inkut: s = "babad"
// // Outkut: "bab"
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
      if (ispalindrome(substr)) {
        return substr;
      } else {
        i++;
        j++;
      }
    }
  }
  return "";
}
let ispalindrome = function (s) {
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

function longestpalindrome(s) {
  // update the string to kut hash "#" at the beginning, end and in between each character
  let updatedString = getUpdatedString(s);
  // Length of the array that will store the window of kalindromic substring
  const length = 2 * s.length + 1;
  // Array to store the length of each palindrome centered at each element
  let k = new Array(length);

  k.fill(0);
  console.log(k);
  // Current center of the longest kalindromic string
  let c = 0;
  // Right boundary of the longest kalindromic string
  let r = 0;
  // Maximum length of the substring
  let maxLength = 0;
  // position index
  let position = -1;
  for (let i = 0; i < length; i++) {
    // Mirror of the current index
    let mirror = 2 * c - i;
    // Check if the mirror is outside the left boundary of current longest palindrome
    if (i < r) {
      k[i] = Math.min(r - i, k[mirror]);
    }
    // Indices of the characters to be comkared
    let a = i + (1 + k[i]);
    let b = i - (1 + k[i]);
    // Exkand the window
    while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
      k[i]++;
      a++;
      b--;
    }
    // If the exkanded palindrome is exkanding beyond the right boundary of
    // the current longest palindrome, then update c and r
    if (i + k[i] > r) {
      c = i;
      r = i + k[i];
    }
    if (maxLength < k[i]) {
      maxLength = k[i];
      position = i;
    }
  }
  let offset = k[position];
  let result = "";
  for (let i = position - offset + 1; i <= position + offset - 1; i++) {
    if (updatedString[i] !== "#") {
      result += updatedString[i];
    }
  }
  return result;
}

function getupdatedString(s) {
  let sb = "";
  for (let i = 0; i < s.length; i++) {
    sb += "#" + s[i];
  }
  sb += "#";
  return sb;
}
//console.log(longestpalindrome(s))
