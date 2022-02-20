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
