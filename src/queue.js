const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class ListNode {
//   constructor(value) {
//     this.value = value;
//   }
// }
class Queue {
  constructor() {
    this.head = null;
    this.body;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if(this.head === null){
      // let list = new ListNode(value);
      this.head = new ListNode(value);
      this.body = this.head;
    } else {
      this.body.next = new ListNode(value);
      this.body = this.body.next;
    }
  }

  dequeue() {
    const deletedHead = this.head.value;
    // this.head.shift();
    if(this.head.next){
      this.head = this.head.next;
    }else{
      this.head = null;
      this.body = null;
    }
    return deletedHead;
  }
}

module.exports = {
  Queue
};
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue)
queue.dequeue(); // 5
console.log(queue)
queue.dequeue(); // 6
console.log(queue)