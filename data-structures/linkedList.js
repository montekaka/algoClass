/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;    
  }

  insert(value) {
    const node = new Node(value);
    if(!this.head) {      
      this.head = node;
      this.tail = this.head;
    } else if (this.head === this.tail) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  reverse() {
    if(!this.head) return this.head;
    let first = this.head;
    let second = this.head.next;
    this.tail = first;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    this.tail.next = null;
  }

  forEach(cb) {
    let node = this.head;
    while(node) {
      cb(node.value);
      node = node.next;
    }
  }

  print() {
    let result = [];
    this.forEach((value) => {
      result.push(value)
    });
    return result.join(", ");
  }

  insertAfter(node, value) {
    let oldNext = node.next;
    let newNext = new Node(value);
    node.next = newNext;
    newNext.next = oldNext;
    if(this.tail === node) this.tail = newNext;
    return newNext;
  }

  removeAfter(node) {
    let removeNode = node.next;
    if(!removeNode) return "Nothing to remove";
    let newNext = removeNode.next;
    node.next = newNext;
    removeNode.next = null;
    if(this.tail === removeNode) this.tail = node;
    return removeNode;
  }

  insertHead(value) {
    const node = new Node(value);
    const head = this.head;
    node.next = head;
    this.head = node;
    return this.head;
  }

  removeHead() {
    const head = this.head;
    const next = head.next;
    this.head = next;
    head.next = null;
    if(this.tail === head) this.tail = next;
    return head;
  }

  findNode(value) {
    let node = this.head;
    if(!node) return false;
    while(node) {
      if(node.value === value) return node;
      node = node.next;
    }    
  }

  appendToTail(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    return node;
  }

}

const myList = new LinkedList(0);

console.log(myList.print(), 'should be 0');
console.log(myList.insertAfter(myList.head, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.removeAfter(myList.head), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.appendToTail(4), 'should be 4');
console.log(myList.print(), 'should be 0, 2, 3, 4');
console.log(myList.findNode(0) === myList.head, 'should be true');
console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
myList.insertAfter(myList.findNode(2), 2.5);
console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
myList.removeAfter(myList.findNode(2));
console.log(myList.print())
// PART 1

// function Node(value) {
//   this.next = null;
//   this.value = value;
// }

// function LinkedList(headValue) {
//   if (headValue === undefined) console.log('Must provide value for first node');
//   this.head = new Node(headValue);
// }

// LinkedList.prototype.forEach = function(callback) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.print = function() {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.insertAfter = function(node, value) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.removeAfter = function(node) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.insertHead = function(value) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.removeHead = function() {
//   // implement me...
// }

// LinkedList.prototype.findNode = function(value) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.appendToTail = function(value) {
//   // implement me...
// };
// // Time complexity:


// // PART 2:

// LinkedList.prototype.insertBefore = function(node, value) {
//   // implement me...
// };
// // Time complexity:

// LinkedList.prototype.removeBefore = function(node) {
//   // implement me...
// };
// // Time complexity:



/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */
