//is it anagram?

function anag(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let storage = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
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
