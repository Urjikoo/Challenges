// * Given a dictionary (in this case, a "plain old JavaScript Object" value,
// * aka POJO), a string key, and a value of any type, place the value in the
// * dictionary at the key. If there is a collision (that is: if a value
// * already exists at the given key), then take care to store both values
// * together.
// */

function insert(dictionary, key, value) {
  let container = [];
  dictionary[key] = container;
  container.push(value);
}
function ins(dictionary, key, value) {
  if (!key in dictionary) {
    console.log(value);
    let newcont = [];
    //newcont.push(value)
    dictionary[key] = newcont;
  } else {
    let oldcont = dictionary[key];
    //oldcont.push(value)
  }
}
let shelf = {};
ins(shelf, "A", "Apple,the");
//console.log(shelf)
console.log(ins(dictionary, key, value));
