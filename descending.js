// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
//
// param is string; declaring a function return the string from the last to beginging.;ex. 45=> 54 ;declare a function that returns the decending order.>

function descending(num) {
  return +(num + "")
    .split("")
    .sort(function (x, y) {
      return y - x;
    })
    .join("");
}
console.log(descending(2 + 10));

//
