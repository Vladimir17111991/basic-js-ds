const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.header = null;
  }
  root() {
    return this.header;
  }

  addNode(node, newNode) {
    (newNode.data < node.data)
      ? (node.left === null) ? node.left = newNode : this.addNode(node.left, newNode)
      : (node.right === null) ? node.right = newNode : this.addNode(node.right, newNode);
  }
  add(data) {
    let node = new Node(data);
    (this.header === null) ? this.header = node : this.addNode(this.header, node);
  }

  has(data) {
    return this.find(data) !==null;
  }

  find(data) {
    let cur = this.header;
    while (cur !== null) {
      if (cur.data === data) {
        return cur;
      } else if (data < cur.data) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return null;
  }

  remove(data) {
    this.removeNode(this.header, data);
  }
  removeNode(node,data){
    if(node === null) return null;
    if(data === node.data){
      if(node.left === null) return node.right;
      if(node.right === null) return node.left;
      if(node.left === null && node.right === null) return null;
      let max = node.left;
      while(max.right){
        max = max.right;
      }
      node.data = max.data;
      node.left = this.removeNode(node.left,data);
      return node;
    } else if(data > node.data){
      node.right = this.removeNode(node.right,data);
      return node;
    } else {
      node.left = this.removeNode(node.left,data);
      return node;
    }
  }
  min() {
    let cur = this.header;
    while(cur.left !== null){
      cur = cur.left;
    }
    return cur.data;
  }

  max() {
    let cur = this.header;
    while(cur.right !== null){
      cur = cur.right;
    }
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
tree.min();
// tree.max();
// console.log(tree)
