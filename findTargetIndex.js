// // Given a sorted array of distinct integers and a target value, return the index if 	  the target is found. If not, return the index where it would be if it were inserted in order.
// // 
// //  *  Input: nums = [1,3,5,6], num = 5, 
// // 	  Output: 2

// // 	 Input nums = [1,3,5,6], /num = 7
// // 	 output: 4

// //  */
// //  param is an array; returning the index of the the given number.; ex[1,3,5,7],we're given 9 the index would be 4,declare a function that will take the input and give the index of it.
// // the indexChecker will take the input and check the index in the given array. how? 

// //function => indexChecker(arr, t) [3,5, 6], 6.   = false
// //declare the conditional (if) that that arr[i] === (t) if true
// //return i // if false  target(2)< arr[i](3) => i if target(4)> arr[i](3) =>
// // declare a for loop (i=0 ; i<arr.length; i++)
// // declare conditional that will take target and find the index in the array and then return the index.

// //  

function indexChecker(arr, target){
  // let arr=[1,3,5,6]
  for(let i=0; i<arr.length; i++){

  if(arr[i]=== target){
    return i
  }else if(target<arr[i]){
    return i
  }

  }
  return i+1
}console.log(indexChecker(arr[3])