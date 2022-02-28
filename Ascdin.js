// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// param is an array of whole integers in order; declaring a function that returns youngest , oldest , diff between youngest nad oldest.; ex [5month, 12ye, 22yr,33yr]=> [0,33,33]

function familyAges(arr) {
  let ages = arr.sort((a, b) => a - b);
  console.log(ages);
  let lastAge = ages.pop(-1); //
  let firstAge = ages.shift();
  console.log(lastAge, firstAge);
  let finalArray = [firstAge, lastAge, lastAge - firstAge];

  return finalArray;
}
familyAges([22, 3, 11, 29, 45]);
