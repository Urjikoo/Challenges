function ex1() {
  // In an array, the values we are collecting are the items.
  var myArray = [23, 45, 99];
  var myObject = {
    0: 23,
    1: 45,
    2: 99,
  };
  console.log(typeof myArray.length); // 'number'
  console.log(typeof myObject.length); // 'undefined'

  console.log(myArray);

  // In a linked list, we have to make a distinction between the items in the
  // collection and the values they describe. That's because in addition to
  // representing the values, the items have to track some extra data. More
  // specifically: each item has to keep track of the next item in the
  // sequence. This is data about data which is often described as "metadata".
  //
  // In this program, we're defining the word "item". In this program, "item"
  // is a data type: an object with a property named `myValue` and a property
  // named `myNextItem`.
  var item1 = {
    myValue: 23,
    myNextItem: null,
  };
  var item2 = {
    myValue: 45,
    myNextItem: null,
  };
  item1.myNextItem = item2;
  var item3 = {
    myValue: 99,
    myNextItem: null,
  };
  item2.myNextItem = item3;

  console.log(item1);
}
//ex1();

function ex2() {
  function lastValue(linkedList) {
    return linkedList.myNextItem.myNextItem.myValue;
  }

  {
    let myFirstItem = { myValue: 9, myNextItem: null };
    let mySecondItem = { myValue: 11, myNextItem: null };
    let myThirdItem = { myValue: 3.14, myNextItem: null };
    myFirstItem.myNextItem = mySecondItem;
    mySecondItem.myNextItem = myThirdItem;

    console.log(lastValue(myFirstItem)); // 3.14
    // This works, but it *only* works if the linked list has three items.
    // So maybe the name `thirdValue` would be a better name for that
    // particular function.

    //lastValue(await (await fetch('http://example.com/linked-list.json').json()));
  }
}
//ex2();

function ex3() {
  function lastValue(linkedList) {
    var currentItem = linkedList;
    while (linkedList.myNextItem !== null) {
      linkedList = linkedList.myNextItem;
    }
    return linkedList.myValue;
  }
  // Using a temporary variable named `currentItem` DOESN'T CHANGE THE
  // ALGORITHM, but it might make it easier to understand!
  //function lastValue(linkedList) {
  //  var currentItem = linkedList;
  //
  //  while (currentItem.myNextItem !== null) {
  //    currentItem = currentItem.myNextItem;
  //  }
  //
  //  return currentItem.myValue;
  //}

  {
    let myFirstItem = { myValue: 1, myNextItem: null };
    let mySecondItem = { myValue: 2, myNextItem: null };
    let myThirdItem = { myValue: 3, myNextItem: null };
    myFirstItem.myNextItem = mySecondItem;
    mySecondItem.myNextItem = myThirdItem;

    console.log("three items:", lastValue(myFirstItem)); // 3.14
  }

  {
    let myFirstItem = { myValue: 1001, myNextItem: null };
    let mySecondItem = { myValue: 1002, myNextItem: null };
    let myThirdItem = { myValue: 1003, myNextItem: null };
    let myFourthItem = { myValue: 1004, myNextItem: null };
    myFirstItem.myNextItem = mySecondItem;
    mySecondItem.myNextItem = myThirdItem;
    myThirdItem.myNextItem = myFourthItem;
    console.log("four items:", lastValue(myFirstItem)); // 24601
  }
}
//ex3();

function ex4() {
  // The "start" or "head" of this linked list is not distinct from any of the
  // other items. All of the items are uniform in that they have two properties.
  // What that means is that our algorithm works for any item in the list. Put
  // differently, the function will return the right result no matter which item
  // we call it with.
  function lastValue(linkedList) {
    var currentItem = linkedList;
    while (currentItem.myNextItem !== null) {
      currentItem = currentItem.myNextItem;
    }
    return currentItem.myValue;
  }
  {
    let myFirstItem = { myValue: 1001, myNextItem: null };
    let mySecondItem = { myValue: 1002, myNextItem: null };
    let myThirdItem = { myValue: 1003, myNextItem: null };
    let myFourthItem = { myValue: 1004, myNextItem: null };
    myFirstItem.myNextItem = mySecondItem;
    mySecondItem.myNextItem = myThirdItem;
    myThirdItem.myNextItem = myFourthItem;
    console.log("with the first item:", lastValue(myFirstItem)); // 24601
    console.log("with the second item:", lastValue(mySecondItem)); // 24601
    console.log("with the third item:", lastValue(myThirdItem)); // 24601
    console.log("with the fourth item:", lastValue(myFourthItem)); // 24601
  }
}
ex4();
