/* function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

console.log(Square.prototype);
function Square(size) {
  Rectangle.call(this, size, size);
}
console.log(Object.prototype.isPrototypeOf(Square.prototype));

Square.prototype = Object.create(Rectangle.prototype);
console.log(Object.prototype.isPrototypeOf(Square.prototype));

Square.prototype.constructor = Square;
console.log(Square.prototype);
console.log(Object.prototype.isPrototypeOf(Square.prototype));


Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}; */

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   toString() {
//     return `[Rectangle ${this.width * this.length}]`;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   toString() {
//     return `[Square] ${this.width * this.length}`;
//   }
// }

// let sqr = new Square(20);
// console.log(sqr);
// console.log(sqr.toString());
// console.log(sqr.getArea());

let Person = class {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, sex, semester) {
    super(name, age, sex);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
    console.log(`${this.name} is ${this.sex}.`);
  }
};

let student = new Student('Kim', 22, 'female', 'Fall');
student.sayName(); // logs 'My name is Kim.'
student.enrollInCourse('JS120'); // logs 'Kim has enrolled in course JS120.'
console.log(student);