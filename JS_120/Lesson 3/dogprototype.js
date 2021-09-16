// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   // this.bark method removed.
// }

// Delete DogPrototype

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'

// console.log(maxi.hasOwnProperty('bark')); // false
// console.log(dexter.hasOwnProperty('bark')); // false
// console.log(biggie.hasOwnProperty('bark')); // false
// console.log(Object.getPrototypeOf(maxi).bark === DogPrototype.bark); // true
// console.log(Object.getPrototypeOf(dexter).bark === DogPrototype.bark); // true
// console.log(Object.getPrototypeOf(biggie).bark === DogPrototype.bark); // true

// console.log(typeof DogPrototype);




// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, Dog.myPrototype);
//   // console.log(this, Dog);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.myPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// Dog.foo = 1;


// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);
// maxi.bark(); // 'Woof!'


// console.log(maxi.hasOwnProperty('bark')); // false
// console.log(dexter.hasOwnProperty('bark')); // false
// console.log(biggie.hasOwnProperty('bark')); // false
// console.log(Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark); // true


// console.log(Dog.prototype);



function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

Dog.prototype.foo = 'Howdy!';

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
// biggie.bark(); // 'Yip!'
console.log(biggie);

// console.log(maxi.foo);

let foo = {
  bar: 1,
};

console.log(Dog.prototype);

// console.log(foo);
// console.log(Object.hasOwnProperty('hasOwnProperty'));

// console.log(typeof Dog.prototype);
// console.log(foo.prototype);
// console.log(Dog.prototype.constructor);
// console.log(maxi.constructor);
console.log(Object.prototype.isPrototypeOf(Object));
console.log(Object);

let dog = Object.getPrototypeOf(biggie); // biggies prototype is Dog.prototype
let end = Object.getPrototypeOf(dog); // Dog.prototypes proto is 
console.log(end);
console.log(Object.getPrototypeOf(foo));
let endend = Object.getPrototypeOf(end);
console.log(Object.getPrototypeOf(biggie));
console.log(Object.getPrototypeOf(dog));
// console.log(Object.getPrototypeOf(end));
console.log(Object.getPrototypeOf(Object));
console.log(endend);
let fooProto = Object.getPrototypeOf(foo);
let dogProto = Object.getPrototypeOf(Dog.prototype);

console.log(fooProto === dogProto);

console.log(biggie.constructor);
console.log(Dog.constructor);
console.log(Function.constructor);
// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// // console.log(maxi.constructor);
// // console.log(maxi instanceof Dog);

// // console.log(foo.constructor);

// let obj = new Object();
// console.log(obj);
// console.log(obj.constructor);
// console.log(Object.prototype);
// Object.prototype.bar = 1;
// console.log(Object.prototype);

// console.log(foo.constructor);
// console.log(foo.bar);
// console.log(Object.getPrototypeOf(foo));
// console.log(Object.getPrototypeOf(Object));
// let obj1 = Object.getPrototypeOf(Object);
// obj1.baz = 2;
// console.log(obj1);
// console.log(Object.getPrototypeOf(Object));
// console.log(obj1.prototype);
// console.log(Dog.prototype);
// console.log(foo.prototype);
// console.log(typeof Object, typeof foo, typeof Dog);
// console.log(Object.prototype, foo.prototype, Dog.prototype);
