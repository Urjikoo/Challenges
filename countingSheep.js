// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// we have an array containing elements true or false or null/undefined
// we will create a function that counts the true elements and also checks for bad values.
// we will create a conditional that checks and counts the true elements and return the how many(the result) else it wont count it.
// we will create ternary method
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count += 1;
    }
  }
  return count;
}
// / Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// pram arr
// declaring a function that returns the present/true values from the array after counting how many in there.
// ex. ['sheep1','','sheep2','sheep3']=>3
// declare a function with a condtional in it to count the amount of the sheep/true/non-empty value. delcare a loop to iterate and add, then in the conditional declare an arguement if index of the array is not an empty value, it will count it i=+ else it will not count it.

function countingSheep(){
  let arr=['sheep1','sheep2','sheep3','','','sheep6']
  let counter=0
  for(i=0; i<arr.length; i++) {
    if(arr[i]!==''){
      counter+=1;
    }

  }
  return counter;
   console.log(counter)
}
console.log(countingSheep())
