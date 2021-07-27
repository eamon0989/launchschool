/* 


function Factory() {
  this.foo = 1;
  this.bar = 'string';
}

Factory.prototype.example = "I'm a property of Factory.prototype";
console.log(Factory.prototype); // { example: "I'm a property of Factory.prototype" }
let descendant = new Factory();
/*
console.log(descendant);
// console.log(object.example);
// object.foo = object.sum(this.foo);
// console.log(object.foo);

// console.log();

console.log(Factory.prototype);
console.log(Object.getPrototypeOf(Factory.prototype));

console.log(Object.getPrototypeOf(Factory.prototype) === Object.prototype);
console.log(Object.prototype.isPrototypeOf(Factory.prototype));

Object.prototype.test = `I'm a property of Object.prototype`;
console.log(Object.prototype);

console.log(Factory.prototype.test);
console.log(Factory.prototype);
console.log(descendant.test);



// console.log(Object.getPrototypeOf(func.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(func.prototype) === Object.getPrototypeOf(Factory.prototype));
// console.log(Object.getPrototypeOf(func.prototype) === Object.getPrototypeOf(object));
// console.log(Object.prototype === Object.getPrototypeOf(obj));
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(obj));

// Object.prototype.foo = 'Hey there!';
// console.log(Object.prototype);
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(obj));

// console.log(obj.foo);

// console.log(Object);
// console.log(Object);
// console.log(Object.getPrototypeOf(Object));
// console.log(Object.getPrototypeOf(obj));
// let top = Object.getPrototypeOf(Object);
// let toptop = Object.getPrototypeOf(top);
// console.log(top, toptop);
// console.log(Object.top);

// while (Object.getPrototypeOf(object) !== null) {
//   console.log(Object.getPrototypeOf(object));
// }

// console.log(Object.prototype.constructor);
// Object.prototype.baz = 21;
// console.log(Object.prototype);
// console.log(Factory.prototype.baz);

// console.log(obj.baz);

// let newObj = new Factory();
// console.log(newObj);
// console.log(newObj.baz); 

// let foo = {
//   bar: 1,
// };

// console.log(foo.bar); // 1

// console.log(foo.hasOwnProperty('bar'));
// console.log(Object.prototype.); */

// Object.prototype.foo = 1;
let obj = {};
let objProto = Object.getPrototypeOf(obj);
console.log(objProto === Object.prototype); // true
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.prototype.isPrototypeOf(obj)); // true
// console.log(obj.foo); // 1
// console.log(obj);
// console.log(obj.constructor); // [Function: Object]
// let obj1 = new Object();
// console.log(obj1);
// console.log(obj1.constructor); // [Function: Object]

// console.log(Object.prototype.hasOwnProperty('constructor')); // true
// console.log(Object.prototype.constructor === obj.constructor); // true
// console.log(descendant.constructor); // [Function: Factory]
// console.log(Factory.prototype.constructor === Object.prototype.constructor); //true
// console.log(Factory.prototype.constructor); // [Function: Factory]
// console.log(Object.prototype.constructor); // [Function: Object]
// let factProto = Object.getPrototypeOf(Factory.prototype);
// console.log(factProto.constructor === Object.prototype.constructor); // true
// console.log(Object.constructor); // [Function: Function]
// console.log(Object.prototype.constructor); // [Function: Object]

// console.log(Factory.prototype.hasOwnProperty('constructor')); //true
// console.log(Factory.prototype.constructor === Factory); // true

// console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
/*
let noProp = Object.create(null);
console.log(noProp); // [Object: null prototype] {}
console.log(Object.prototype.isPrototypeOf(noProp)); // false */

function Factory() {
  this.foo = 1;
  this.bar = 'string';
}

let descendant = new Factory();

console.log(Factory.prototype); // {}
console.log(Object.getPrototypeOf(Factory.prototype)); // [Object: null prototype] {}
console.log(Object.getPrototypeOf(Factory.prototype) === Object.prototype); // true
console.log(Object.prototype.isPrototypeOf(Factory.prototype)); // true

Object.prototype.test = `I'm a property of Object.prototype`;
console.log(Object.prototype); // [Object: null prototype]
  // { test: "I'm a property of Object.prototype" } */

console.log(Factory.prototype.test); // I'm a property of Object.prototype
console.log(Factory.prototype); // {}
console.log(descendant.test); // I'm a property of Object.prototype