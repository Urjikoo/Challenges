let people = [
  {
    name: "Harry",
    eyeColor: "brown",
    favorite: "drinking",
  },
  {
    name: "weasley",
    eyeColor: "blue",
    favorite: "dancing",
  },
  {
    name: "Alice",
    eyeColor: "brown",
    favorite: "dancing",
  },
  {
    name: "Hagrid",
    eyeColor: "black",
    favorite: "drinking",
  },
];
let newmap = new Map();
let storeDup = [];
people.forEach((sew) => {
  let eye = sew.eyeColor;
  let names = newmap.get(sew.eyeColor);
  //console.log(sew)
  if (!names) {
    names = [];
  }
  names.push(sew.name);
  //console.log(names)
  newmap.set(sew.eyeColor, names);
});
for (let [key, holder] of newmap) {
  storeDup.push(holder);
}
console.log(storeDup);
console.log(newmap);

// function findit(arr1,arr2){
//   let store=true
//   for(let i=0;i<arr1.length; i++){
//     let theindex= arr2.indexOf(arr2[i]**2)
//     console.log(theindex)
//     if(theindex===-1){
//       return false
//     }
//     arr2.splice(theindex)
//   }
//   //return store
// }
// console.log(findit([1,2,3],[1,4,9]))

// function same(arr1,arr2){
//   if(arr1.length!==arr2.length){
//    return false
//   }
//   let freq1={}, freq2={}
//   for(let value of arr1){
//     freq1[value]=(freq1[value]|| 0)+1
//   }
//   for(let value of arr2){
//     freq2[value]=(freq2[value]|| 0)+1
//   }
//   for(let key in freq1){
//     if(!(key**2 in freq2)){
//       return false
//     }
//     if(freq2[key**2]!==freq1[key]){
//       return false
//     }
//   }
//   console.log(freq2)
// }
// console.log(same([1,2,2,3],[1,4,4,9]))

// function anag(str1,str2){
//  if(str1.length!==str2.length){
//    return false
//  }
//  let storage={}
//  for(let i=0;i<str1.length;i++){
//   let letter= str1[i]
//   if(storage[letter]){
//     storage[letter]+=1
//   }else{
//     storage[letter]=1
//   }
//  }
//  console.log(storage)
//   for(let i=0;i<str1.length;i++){
//     let letter=str2[i]
//     if(!storage[letter]){
//       return false
//     }else{
//       storage[letter]-=1
//     }
//  }
// return true
// }
// console.log(anag('angered',"enraged"))

function findit(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //console.log(arr[j])
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(findit([-3, -2, -1, 1, 2, 9]));
