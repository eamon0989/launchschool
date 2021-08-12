// // let Animal = {
// //   init: function(type) {
// //     this.type = type;
// //   },

// //   breathe: function() {
// //     console.log("I'm breathing");
// //   },
// // };

// function Animal() {

// }

// Animal.prototype = {
//   init(type) {
//     this.type = type;
//   },

//   move() {
//     console.log(`I ${this.movement}.`);
//   }
// };

// function Mammal() {
// }

// Mammal.prototype = Object.create(Animal.prototype);
// Mammal.prototype.init("mammal");
// Mammal.prototype.movement = "walk and run";

// function Reptile() {
// }

// Reptile.prototype = Object.create(Animal.prototype);
// Reptile.prototype.init("reptile");
// Reptile.prototype.movement = "walk and swim";

// let mammal = new Mammal();

// console.log(mammal.type);   // "mammal"
// mammal.move();

// let reptile = new Reptile();

// console.log(reptile.type);   // "reptile"
// reptile.move();


// let Animal = {
//   init: function(type) {
//     this.type = type;
//   },

//   breathe: function() {
//     console.log("I'm breathing");
//   },
// };


// class Animal {
//   constructor(type, movement) {
//     this.type = type;
//     this.movement = movement;
//   }

//   init(type) {
//     this.type = type;
//   }

//   move() {
//     console.log(`I ${this.movement}.`);
//   }
// }


// class Mammal extends Animal {
//   constructor(type, movement) {
//     super(type, movement);
//   }
// }

// class Reptile extends Animal {
//   constructor(type, movement) {
//     super(type, movement);
//   }
// }

// let mammal = new Mammal('mammal', 'walk and run');

// console.log(mammal.type);   // "mammal"
// mammal.move();

// let reptile = new Reptile('reptile', 'slither and swim');

// console.log(reptile.type);   // "reptile"
// reptile.move();

// console.log(mammal, reptile);

// function ObjectFactory() {
//   this.property = `Hi, I'm a property!`;
// }

// ObjectFactory.prototype.prop = `I'm a property of ObjectFactory.prototype`;

// let obj = new ObjectFactory();

// console.log(obj); // ObjectFactory { property: "Hi, I'm a property!" }
// console.log(obj.prop); // I'm a property of ObjectFactory.prototype

// console.log(obj.__proto__); // { prop: "I'm a property of ObjectFactory.prototype" }
// console.log(Object.getPrototypeOf(obj)); // { prop: "I'm a property of ObjectFactory.prototype" }

// // let father = {};
// // let son = {};

// // Object.setPrototypeOf(son, father);
// // Object.getPrototypeOf(son); // father

// function ObjectFactory() {
//   this.property = `Hi, I'm a property!`;
// }

// let obj = new ObjectFactory();

// console.log(typeof ObjectFactory.prototype); // object
// console.log(obj instanceof ObjectFactory); // true
// console.log(ObjectFactory.prototype.isPrototypeOf(obj)); // true

// function Olympian(name, country) {
//   console.log(this); // Gymnast {}
//   this.name = name;
//   this.country = country;
// }

// Olympian.prototype.info = function() {
//   return `${this.name} competes in the Olympics`;
// };

// function Gymnast(name, country) {
//   Olympian.call(this, name, country); // line 11
// }

// let simone = new Gymnast('Simone Biles', 'United States');
// console.log(simone);

// console.log(simone.constructor);
// console.log(Olympian.prototype.isPrototypeOf(simone)); // false
// console.log(Object.prototype.isPrototypeOf(simone)); // false

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   }.bind(this),
// };

// john.greetings();

// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

// let ninjaA;

// {
//   const Ninja = function() {
//     this.swung = false;
//   };

//   ninjaA = new Ninja();
// }


// // create a `ninjaB` object here; don't change anything else
// let ninjaB = new ninjaA.constructor();
// console.log(ninjaA.constructor === ninjaB.constructor); // => true
// console.log(ninjaA, ninjaB);

// class Person {
//   greeting = function(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting((text.toUpperCase()));
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting((text.toUpperCase()));
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting = function() {
//     console.log('Hey there!');
//   }

//   test = 'Is this a public instance field?';

//   goodbye() {
//     console.log('goodbye');
//   }
// }


// let person = new Person('Eamon');

// console.log(person); // Person { greeting: [Function: greeting],
// // test: 'Is this a public instance field?', name: 'Eamon' }
// console.log(person.hasOwnProperty('greeting')); // true
// console.log(Person.prototype.hasOwnProperty('greeting')); // false
// console.log(person.hasOwnProperty('goodbye')); // false
// console.log(Person.prototype.hasOwnProperty('goodbye')); // true
// person.greeting(); // Hey there!
// person.goodbye(); // goodbye
// console.log(Person.prototype.hasOwnProperty('test')); // false;


class Person {
  constructor(object) {
    Object.assign(this, object);
  }

  greeting(text) {
    console.log(text);
  }
}

function passClass(constructor, object) {
  return new constructor(object);
}

let man = {
  name: 'Eamon',
  age: 31,
  profession: 'coder',
};

let man1 = passClass(Person, man);
console.log(man1);

// function Person() {
//   this.greeting = function(text) {
//     console.log(text);
//   };

//   goodbye: function goodbye() {
//     console.log(`Goodbye`);
//   }
// }

// Person.goodbye = function() {
//   console.log('goodbye');
// }


// let person = new Person();
// person.greeting();
// console.log(person.hasOwnProperty('greeting')); // true
// Person.goodbye();
// person.goodbye();

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   }.bind(this),
// };

// john.greetings();