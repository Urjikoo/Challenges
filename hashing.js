// 2022-02-10
'use strict';
// Each example uses `console.log` to describe its results. There are a lot of
// examples, so seeing all the output would be a little overwhelming if all the
// examples ran together. To make things a little easier to digest, each
// example is defined in a separate function. That way, you can run one example
// at a time. Just remove the comment before the line that calls the example
// function you'd like to try.
​
function ex1() {
  var myDictionary = {};
​
  myDictionary.foo = 23;
​
  console.log(myDictionary);
​
  myDictionary['bar'] = 45;
​
  console.log(myDictionary);
​
  myDictionary['this is a weird key with ? all sorts of ;; junk'] = 99;
​
  console.log(myDictionary);
​
  // myDictionary.this is a weird key with ? all sorts of ;; junk = 23;
​
  myDictionary['hello' + ' ' + 'world'] = 101;
​
  console.log(myDictionary);
​
  var keyName = 'MyKey';
​
  myDictionary[keyName] = 202;
​
  console.log(myDictionary);
​
  var makeKey = () => { return 'key_from_arrow_function'; };
​
  myDictionary[makeKey()] = 303;
​
  console.log(myDictionary);
​
  myDictionary[404] = 'four oh four';
​
  console.log(myDictionary);
​
  myDictionary[function() {}] = 505;
​
  console.log(myDictionary);
​
  var myOtherDictionary = { key: 'value' };
  myDictionary[myOtherDictionary] = 'value for myOtherDictionary as a string';
​
  console.log(myDictionary);
​
  console.log(myDictionary[404]);
​
  var thirdDictionary = { key: 'another value', aSecondKey: 'a really long string also for some reason' };
​
  //myDictionary[thirdDictionary] = 900;
​
  console.log(myDictionary[thirdDictionary]);
​
  myDictionary[thirdDictionary] = 'value for thirdDictionary as a string';
​
  console.log('myDictionary[thirdDictionary]', myDictionary[thirdDictionary]);
  console.log('myDictionary[myOtherDictionary]', myDictionary[myOtherDictionary]);
​
  console.log(myDictionary);
}
//ex1();
​
function ex2() {
  // Overwriting
​
  var myObject = {};
  myObject['foo'] = 23;
​
  console.log(myObject);
  myObject['foo'] = 45;
​
  console.log(myObject);
}
//ex2();
​
function ex3() {
  /**
   * Given a dictionary (in this case, a "plain old JavaScript Object" value,
   * aka POJO), a string key, and a value of any type, place the value in the
   * dictionary at the key. If there is a collision (that is: if a value
   * already exists at the given key), then take care to store both values
   * together.
   */
  function insert(dictionary, key, value) {
    // This isn't quite right...
    dictionary[key] = value;
  }
​
  var shelf = {};
​
  insert(shelf, 'H', 'Hobbit, The');
​
  console.log(shelf);
​
  insert(shelf, 'H', 'Handmaide\'s Tail, The');
​
  console.log(shelf);
}
//ex3();
​
function ex4() {
  /**
   * Given a dictionary (in this case, a "plain old JavaScript Object" value,
   * aka POJO), a string key, and a value of any type, place the value in the
   * dictionary at the key. If there is a collision (that is: if a value
   * already exists at the given key), then take care to store both values
   * together.
   */
  function insert(dictionary, key, value) {
    var container = [];
    dictionary[key] = container;
    container.push(value);
​
    // We could also write the above 3 statements using the two statements below
    //dictionary[key] = [];
    //dictionary[key].push(value);
​
    // But either way, it's still not quite right.
  }
​
  var shelf = {};
​
  insert(shelf, 'H', 'Hobbit, The');
​
  console.log(shelf);
​
  insert(shelf, 'H', 'Handmaide\'s Tail, The');
​
  console.log(shelf);
}
//ex4();
​
function ex5() {
  /**
   * Given a dictionary (in this case, a "plain old JavaScript Object" value,
   * aka POJO), a string key, and a value of any type, place the value in the
   * dictionary at the key. If there is a collision (that is: if a value
   * already exists at the given key), then take care to store both values
   * together.
   */
  // Psuedocode:
  //
  // if there is no container as the key
  //   grab a container
  //   push the book into that container
  //   put the container on the shelf at the key
  // else
  //   push the book into the container
  function insert(dictionary, key, value) {
    // There are other ways to express this condition! More below
    if (!(key in dictionary)) {
      var newContainer = [];
      newContainer.push(value);
      dictionary[key] = newContainer;
    } else {
      var oldContainer = dictionary[key];
      oldContainer.push(value);
    }
  }
//another
  var shelf = {};

  insert(shelf, 'H', 'Hobbit, The');

  console.log(shelf);

  insert(shelf, 'H', 'Handmaide\'s Tail, The');
  console.log(shelf);
  shelf['H'] = 'Hugo';
  console.log(shelf);
}
//ex5();
function ex6() {
  // Above, we wrote
  if (!(key in dictionary)) {
  }
​
  // The condition part could be written in other ways, though. Here it is all
  // on its own, outside of the "if" statement:
  !(key in dictionary);
​
  // That's the same as
  key in dictionary === false;
​
  // You could also write this:
  dictionary[key] === undefined;
  // ...although this third version is subtly different. The reason is too
  // complicated to try to cram in right here at the end. Just know that the
  // "in" operator is usually what you want for checking "membership" of
  // JavaScript objects. I'm happy to elaborate any time!
}
//ex6();