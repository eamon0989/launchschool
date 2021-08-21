/*

new Element
methods:
datum
isTail
next

new SimpleLinkedList
methods:
size
isEmpty
peek
head: access first element
push
pop

Static method
fromArray
toArray
reverse (pass in other objects too)

Create a list element
A list element is an object with a value key and a link key
the value can hold any type of value
the link holds a reference to the next link in the chain

Create new element, returns a new object
datum method returns the value of the value key.
isTail method checks if it is the last link (link points to null?)
next method returns the value of the link key

Element can take 2 values, the value value and an object to reference
from the link value


*/
class Element {
  constructor(value, object = null) {
    this.value = value;
    this.nextLink = object;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextLink;
  }

  isTail() {
    return this.nextLink === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headEle = null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    let count = 0;
    let current = this.head();

    while (current) {
      current = current.next();
      count += 1;
    }

    return count;
  }

  push(value) {
    let next = this.headEle;
    this.headEle = new Element(value, next);
  }

  peek() {
    return this.headEle?.value || null;
  }

  head() {
    return this.headEle;
  }

  pop() {
    let value = this.headEle?.value;
    this.headEle = this.headEle.next();
    return value;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (!Array.isArray(array)) array = [];

    [...array].reverse().forEach(value => {
      list.push(value);
    });

    return list;
  }

  toArray() {
    let array = [];
    let current = this.head();

    if (!current?.value) return [];

    while (current?.value) {
      array.push(current.value);
      current = current.nextLink;
    }

    return array;
  }

  reverse() {
    let array = [...this.toArray()];
    array.reverse();
    return SimpleLinkedList.fromArray(array);
  }
}

module.exports = { Element, SimpleLinkedList };