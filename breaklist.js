function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.data = element;
    this.next = null;
  };

  this.head = () => {
    return head;
  };

  this.add = (element) => {
    let node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
}

function Node(data) {
  this.data = data;
  this.next = null;
}

let a = new LinkedList();
let b = new LinkedList();
a.add(1);
a.add(2);
a.add(3);
a.add(4);
a.add(5);

b.add(1);
b.add(2);
b.add(3);
b.add(4);
b.add(5);

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  let firstTemp = new Node(); //creating an empty linked list
  let secondTemp = new Node(); //creating an empty linked list

  let firstHead = (firstTemp = head); //variable holding linkedlist starting at head
  let secondHead = (secondTemp = head.next); //variable holding linkedlist starting at head.next

  head = head.next.next; //assigning head to node 3 since firstHead got 1, secondHead got 2

  while (head !== null && head.next !== null) {
    //while head and head.next is not null:  O(n)

    firstTemp.next = head; //replacing firstTemp.next that was null to equal head. which is 3 in first loop
    //                             firstTemp.next = [1,2,3,4,5,6,7,8,9,10]
    //                                                   ^ since head starts here this is the new firstTemp.next
    secondTemp.next = head.next; //replacing secondTemp.next that was null to equal head.next which is 4 in first loop
    //                             secondTemp.next = [1,2,3,4,5,6,7,8,9,10]
    //                                                      ^ head.next is 4 so this is the new firstTemp.next

    firstTemp = firstTemp.next; //increase the firstTemp by firstTemp.next
    secondTemp = secondTemp.next; //increase the secondTemp by secondTemp.next

    head = head.next.next; //increase the head [1,2,3,4,5,6,7,8,9,10]
    //                                                 ^ loop will start here now
    //checking the next
  }

  if (head != null) {
    //if head is not null but head.next is run this
    firstTemp.next = head; //since head.next is null we only work with firstTemp.next and secondTemp will be null
    firstTemp = firstTemp.next;
  }

  firstTemp.next = null; //always end with .next with null.
  secondTemp.next = null; //always end with .next with null.

  console.log(firstHead);
  console.log(secondHead);
}

alternatingSplit(a.head());

//merge linkedlist

const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummyNode = new LinkedList(-1);
  let result = dummyNode;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      dummyNode.next = new LinkedList(l2.val);
      dummyNode = dummyNode.next;
      l2 = l2.next;
    } else if (l2.val > l1.val) {
      dummyNode.next = new LinkedList(l1.val);
      dummyNode = dummyNode.next;
      l1 = l1.next;
    } else {
      dummyNode.next = new LinkedList(l2.val);
      dummyNode = dummyNode.next;
      l2 = l2.next;

      dummyNode.next = new LinkedList(l1.val);
      dummyNode = dummyNode.next;
      l1 = l1.next;
    }
  }

  if (l1) dummyNode.next = l1;
  if (l2) dummyNode.next = l2;
  return result.next;
};

mergeTwoLists(a.head(), b.head());
