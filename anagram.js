//is it anagram?

function anag(str1, str2) {
  if (str1.length !== str2.length) {
    //the first thing is making sure if both strings are both the same length. if
    return false; //not return false!
  }
  let storage = {}; //declaring an obj to store the letters along with how many times it
  //appread!
  for (let i = 0; i < str1.length; i++) {
    //looping though the first string!
    let letter = str1[i]; //variable to rep teh letter in teh string.
    if (storage[letter]) {
      storage[letter] += 1;
    } else {
      storage[letter] = 1;
    }
  }
  console.log(storage);
  for (let i = 0; i < str1.length; i++) {
    let letter = str2[i];
    if (!storage[letter]) {
      return false;
    } else {
      storage[letter] -= 1;
    }
  }
  return true;
}
console.log(anag("angered", "enraged"));
