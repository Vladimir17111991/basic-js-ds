const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let node = l;
  let deletedNode = null;
  // while(node.next){
  //   if(node.value === k){
    // let count = 0;
    while(node.value === k){
      node = node.next;
      // count ++;
    }
    deletedNode = node;
    // console.log(count)
  while (deletedNode.next) {
    (deletedNode.next.value === k) ? deletedNode.next = deletedNode.next.next : deletedNode = deletedNode.next;
    // if(node.next.value === k){
    // (!deletedNode) ? node = l.next : (deletedNode.next = deletedNode.next.next, node = node.next);
    // deletedNode = node.next;
    // node.next = node.next.next;
    // } else {
    //   deletedNode = node;
    //   node = node.next;
  }
  // }
  // console.log(deletedNode);
  return node;
}

module.exports = {
  removeKFromList
};


removeKFromList([3, 1, 2, 3, 4, 5], 3) //[1, 2, 4, 5]