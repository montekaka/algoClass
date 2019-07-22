/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

// function BinarySearchTree (value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

// BinarySearchTree.prototype.insert = function(value) {
//   // implement me...
// };
// // Time complexity:

// BinarySearchTree.prototype.contains = function(value) {
//   // implement me...
// };
// // Time complexity:

// BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
//   // implement me...
// };
// // Time complexity:

// BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
//   // implement me...
// };
// // Time complexity:

// BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
//   // implement me...
// };
// // Time complexity:


// BinarySearchTree.prototype.checkIfFull = function() {
//   // implement me...
// };
// // Time complexity:

// BinarySearchTree.prototype.checkIfBalanced = function() {
//   // implement me...
// };
// // Time complexity:


class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(this.value >= value) {
      if(this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else {
      if(this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
    return this;
  }

  contains(value) {
    if(this.value === value) return true;
    if(this.value >= value) return this.left.contains(value);
    if(this.value < value) return this.right.contains(value);
    return false;
  }

  maxDepth() {
    if(this === null) return 0;
    let left = 0;
    let right = 0;
    if(this.left) left = this.left.maxDepth();
    if(this.right) right = this.right.maxDepth();
    return Math.max(left, right)+1;
  }

  checkIfBalanced() {    
    const maxDepth = (root) => {
      if(root === null) return true;
      let left = 0;
      let right = 0;
      if(this.left) left = maxDepth(this.left);
      if(this.right) right = maxDepth(this.right);
      if(left === -1 || right === -1 || Math.abs(left-right) > 0) {
        return -1;
      }
      return Math.max(left, right) + 1;
    }

    return maxDepth(this) !== -1;
  }

  isValid() {
    let lastValue = null;
    const _isValid = (root) => {
      if(root === null) return true;
      if(_isValid(root.left) === false) return false;
      if(root.value < lastValue && lastValue !== null) return false;
      lastValue = root.value;
      if(_isValid(root.right) === false) return false;
      return true;
    }
    return _isValid(this);
  }

  traversePreOrder(cb) {
    cb(this);
    if(this.left) this.left.traversePreOrder(cb);
    if(this.right) this.right.traversePreOrder(cb);
  }

  traverseInOrder(cb) {
    if(this.left) this.left.traverseInOrder(cb);
    cb(this);
    if(this.right) this.right.traverseInOrder(cb);
  }

  traversePostOrder(cb) {    
    if(this.left) this.left.traversePostOrder(cb);
    if(this.right) this.right.traversePostOrder(cb);
    cb(this);
  }

  traverseBreadthFirst(cb) {
    let queue = [this] // first in first out
    while(queue.length > 0) {
      const node = queue.shift();
      cb(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }


}

var bsTree = new BinarySearchTree(10);
bsTree.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
// console.log(bsTree.isValid());
let inOrderTraverseList = [];
let postOrderTraverseList = [];
let preOrderTraverseList = [];
let beadthFirstList = [];

bsTree.traversePostOrder((node) => {
  if(node) {
    postOrderTraverseList.push(node.value);
  }
})

bsTree.traverseInOrder((node) => {
  if(node) {
    inOrderTraverseList.push(node.value);
  }
})

bsTree.traversePreOrder((node) => {
  if(node) {
    preOrderTraverseList.push(node.value);
  }
})

bsTree.traverseBreadthFirst((node) => {
  if(node) {
    beadthFirstList.push(node.value);
  }
})


console.log(preOrderTraverseList)
console.log(inOrderTraverseList)
console.log(postOrderTraverseList)
console.log(beadthFirstList)