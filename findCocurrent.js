function countOccurences(arr) {
  let countObj = new Map();
  arr.forEach((num) => {
    let count = countObj.get(num);
    if (!count) count = 1;
    else count += 1;
    countObj.set(num, count);
  });
  return countObj;
}

function countToDegree(counts) {
  let biggest = -Infinity;
  counts.forEach((count) => {
    if (count > biggest) biggest = count;
  });
  return biggest;
}
console.log(smallestLength([1, 9, 2, 2, 1, 5, 6, 5]));
