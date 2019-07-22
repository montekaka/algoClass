/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

// function Tree (value) {
//   // implement me...
// }

// Tree.prototype.addChild = function(value) {
//   // implement me...
// };
// // Time complexity:


// Tree.prototype.contains = function(value) {
//   // implement me...
// };
// // Time complexity:


// Tree.prototype.traverseDepthFirst = function(fn) {
//   // implement me...
// };
// // Time complexity:


// Tree.prototype.traverseBreadthFirst = function(fn) {
//   // implement me...
// };
// // Time complexity:

class Tree {
  constructor (value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
    return child;
  }

  contains(value) {
    if(this.value === value) return true;
    for(let i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(value)) return true;
    }
    return false;
  }

  // DFS -- Depth first search
  traverseDepthFirst(cb) {
    this.children.forEach((child) => {
      child.traverseDepthFirst(cb);
    }) 
    cb(this);
  }

  //BFS Breadth First Search
  traverseBreadthFirst(cb) {
    let queue = [this]; // first in first out
    while(queue.length > 0) {
      const node = queue.shift();
      cb(node);
      node.children.forEach((child) => {
        queue.push(child);
      });      
    }
  }

}

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);

console.log(tree.contains(8));

var depthFirstResult = [];
tree.traverseDepthFirst(function(node) {
  depthFirstResult.push(node.value);
});
console.log(depthFirstResult, 'should be [5, 6, 2, 3, 8, 7, 4, 1]');

let breadthFirstResult = [];
tree.traverseBreadthFirst((node) => {
  breadthFirstResult.push(node.value);
})
console.log(breadthFirstResult, 'should be [1, 2, 3, 4, 5, 6, 7, 8]');
