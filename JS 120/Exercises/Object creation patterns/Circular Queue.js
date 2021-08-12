class CircularQueue {
  constructor() {
    // this.queue = { 0: null, 1: null, 2:null };
    this.order = Array(3).fill(null);
  }

  dequeue() {
    let shifted = this.order.shift();
    this.order
  }

  enqueue(num) {
    if (this.order.length === 3) {
      this.dequeue();
    }
    this.order.push(num);
    console.log(this.order);
  }

  // getOldest() {

  // }

  // getNewest() {

  // }
}

// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null); // true

// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue() === 1); // true

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2); // true

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5); // true
// console.log(queue.dequeue() === 6); // true
// console.log(queue.dequeue() === 7); // true
// console.log(queue.dequeue() === null); // true

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null); // true

anotherQueue.enqueue(1); // [ 1 ]
anotherQueue.enqueue(2); // [ 1, 2 ]
console.log(anotherQueue.dequeue() === 1); // true

anotherQueue.enqueue(3); // [ 2, 3 ]
anotherQueue.enqueue(4); // [ 2, 3, 4 ]
console.log(anotherQueue.dequeue() === 2); // true
console.log(anotherQueue.order); // [ 3, 4 ]

anotherQueue.enqueue(5); // [ 3, 4, 5 ]
anotherQueue.enqueue(6); // [ 4, 5, 6 ]
anotherQueue.enqueue(7); // [ 5, 6, 7 ]
console.log(anotherQueue.order); // [ 5, 6, 7 ]
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);