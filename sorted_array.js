// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

mergeTwoLists = function (list1, list2) {
  return list1.concat(list2).sort((a, b) => a - b);
};
mergeTwoLists([1, 2, 3], [3, 33, 44, 2]);

// test twi
