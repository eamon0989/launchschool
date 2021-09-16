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
head
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
    this.list = [];
  }

  isEmpty() {
    return this.list.length === 0;
  }

  size() {
    return this.list.length;
  }

  push(value) {

    let next = null;
    if (this.list.length > 0) {
      next = this.head();
    }

    this.list.push(new Element(value, next));
  }

  peek() {
    if (this.list[0]) {
      return this.head().datum();
    }

    return null;
  }

  head() {
    if (this.list[0]) {
      let last = this.list.length - 1;
      return this.list[last];
    }
    return this.list[0];
  }

  pop() {
    return this.list.pop().value;
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    array = array || [];
    let copy = [...array];

    copy.reverse().forEach(value => {
      list.push(value);
    });

    return list;
  }

  toArray() {
    let array = [];
    this.list.reverse().forEach(obj => array.push(obj.value));

    return array;
  }

  reverse() {
    let array = [...this.toArray()];
    array.reverse();
    return SimpleLinkedList.fromArray(array);
  }
}

module.exports = { Element, SimpleLinkedList };