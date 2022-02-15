// ///if we have [1,2,3,4][3,4,5][1,4,5,6]=>[1,1,2,3,3,4,4,5,5,6]

function mergeIt(lists) {
  let sortedValues = []; //storing all of the values in sorted manner
  let listIndex = 0; //how do we compare the values
  let currentNode = list[listIndex]; //starting from the current index
  let sortedList;
  let tail;
  while (listIndex < lists.length) {
    //looping through lists
    if (currentNode.value !== undefined) {
      //since we don't know the current value of currentNode, if its no undefined
      sortedValues.push(currentNode.value);
      currentNode = currentNode.next; //incrementing or pointing to the next node
      if (!currentNode) {
        listIndex++;
        currentNode = lists[listIndex];
      }
    }
  }
  sortedValues.sort((a, b) => a - b); //since we pushed current node value ,now sorting them
  sorted.map((el) => {
    let node = new ListNode(value);
    if (!sortedList) {
      sortedList = ListNode(val);
      tail = sortedList;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  });
  if (!sortedList) return null;
  return sortedList;
}
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

let merging = function (lists) {
  let pointers = [];
  let head;
  let tail;
  for (list of lists) {
    pointers.push(list);
  }
  while (lists.length !== 0) {
    let smallestNode;
    let index;
    let nullCount = lists.length;
    for (let i = 0; i < pointers.length; i++) {
      if (!pointers[i]) {
        nullCount--;
        if (nullCount === 0) {
          if (!head) return null;
          return head;
        }
      }
      if (!smallestNode) {
        smallestNode = pointers[i];
        index = i;
      }
      if (pointers[i]?.val < smallestNode.val) {
        smallestNode = pointers[i];
        index = i;
      }
    }
  }
};
