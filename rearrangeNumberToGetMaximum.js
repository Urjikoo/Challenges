// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Return `nil` if the argument is not valid.
// Returm null if the argument is invalid.

// maxRedigit(123) --> 321

var maxRedigit = function (num) {
  // Do yor magic :)
  if (num < 100 || num > 999) {
    return null;
  } else {
    return Number(
      num
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("")
    );
  }
  //    let result= num.sort((a,b)=>b-a).join('')
  // if(result==null){
  //   return `nil`
};
//   return result
// };
