// function objectFactory() {
//   return {
//     property1: 'My first property',
//     property2: 'My second property',

//     printProperties() {
//       for (let prop in this) {
//         if (typeof this[prop] !== 'function') {
//           console.log(`${prop}: ${this[prop]}`);
//         }
//       }
//     }
//   };
// }

// let object = objectFactory();
// let object1 = objectFactory();
// // object.printProperties();

// // console.log(object);
// // console.log(object1);

// console.log(object instanceof objectFactory); // false
// Object.setPrototypeOf(object, objectFactory.prototype);
// console.log(object instanceof objectFactory); // true

// console.log(Object.getPrototypeOf(object) === Object.prototype); // true
// console.log(Object.getPrototypeOf(object1) === Object.prototype); // true

// {
//   property1: 'My first property',
//   property2: 'My second property',
//   printProperties: [Function: printProperties]
// }
// {
//   property1: 'My first property',
//   property2: 'My second property',
//   printProperties: [Function: printProperties]
// }


// function ObjectFactory() {
//   this.property1 = 'My first property';
//   this.property2 = 'My second property';
// }

// ObjectFactory.prototype.printProperties = function() {
//   for (let prop in this) {
//     if (typeof this[prop] !== 'function') {
//       console.log(`${prop}: ${this[prop]}`);
//     }
//   }
// };

// let object = new ObjectFactory();
// let object1 = new ObjectFactory();

// console.log(object);
// /* ObjectFactory {
//   property1: 'My first property',
//   property2: 'My second property'
// } */
// console.log(object1);
// /* ObjectFactory {
//   property1: 'My first property',
//   property2: 'My second property'
// } */

// object.printProperties();
// /*
// property1: My first property
// property2: My second property */
// object1.printProperties();
// /*
// property1: My first property
// property2: My second property */

// console.log(object instanceof ObjectFactory); // true */

// function Grandfather(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Grandfather.prototype.aboutMe = function() {
//   console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
// };

// let grandad = new Grandfather('Jonathan', 80, 'retired');
// grandad.aboutMe(); // I'm Jonathan, I'm 80 years old and I'm retired.

// function Father(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Father.prototype = Object.create(Grandfather.prototype);

// let dad = new Father('John', 40, 'coder');
// dad.aboutMe(); // I'm John, I'm 40 years old and I'm a coder.

// function Son(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Son.prototype = Object.create(Father.prototype);

// let son = new Son('Johnny', 18, 'student');
// son.aboutMe(); // I'm Johnny, I'm 18 years old and I'm a student.

// console.log(son.constructor);
// console.log(son instanceof Son); // true
// console.log(Father.prototype.isPrototypeOf(Son.prototype)); // true
// console.log(Grandfather.prototype.isPrototypeOf(Son.prototype)); // true
// console.log(son); // Grandfather { name: 'Johnny', age: 18, job: 'student' }

// function Grandfather(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Grandfather.prototype.aboutMe = function() {
//   console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
// };

// function Father(name, age, job) {
//   //code omitted for brevity
// }

// Father.prototype = Object.create(Grandfather.prototype);
// Father.prototype.constructor = Father;

// let dad = new Father('John', 40, 'coder');

// function Son(name, age, job) {
//   //code omitted for brevity
// }

// Son.prototype = Object.create(Father.prototype);
// Son.prototype.constructor = Son;

// let son = new Son('Johnny', 18, 'student');

// console.log(dad.constructor.name); // Father
// console.log(son.constructor.name); // Son

// // console.log(son instanceof Son); // true
// // console.log(Father.prototype.isPrototypeOf(Son.prototype)); // true
// // console.log(Grandfather.prototype.isPrototypeOf(Son.prototype)); // true
// // console.log(son); // Grandfather { name: 'Johnny', age: 18, job: 'student' }

// OLOO

// let carPrototype = {
//   start: function() {
//     this.started = true;
//   },

//   stop: function() {
//     this.started = false;
//   },

//   init(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     return this;
//   },
// };

// let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);
// console.log(car1);
// car1.start();
// console.log(car1);
// car1.stop();
// console.log(car1);
// // let car = carPrototype.init('Toyota', 'Corolla', 2016);
// // console.log(car);
// console.log(car1 instanceof carPrototype.init());


// let personPrototype = {
//   aboutMe: function() {
//     console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this
//       .job === 'retired' ? '' : 'a '}${this.job}.`);
//   },

//   init(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     return this;
//   }
// };

// let personPrototype = {
//   aboutMe: function() {
//     console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this
//       .job === 'retired' ? '' : 'a '}${this.job}.`);
//   }
// };

// let dad = Object.create(personPrototype);
// console.log(dad); // {}
// let dad = Object.create(personPrototype).init('John', 40, 'coder');
// dad.aboutMe();
// console.log(dad);

// let son = Object.create(personPrototype).init('Johnny', 18, 'student');
// son.aboutMe();

// function Father(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Grandfather.prototype.aboutMe = function() {
//   console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
// };

// Father.prototype = Object.create(Grandfather.prototype);

// let dad = new Father('John', 40, 'coder');
// dad.aboutMe();

// function Son(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Son.prototype = Object.create(Father.prototype);

// let son = new Son('Johnny', 18, 'student');
// son.aboutMe();

class Grandfather {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  aboutMe = function() {
    console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
  }
}

let grandad = new Grandfather('Jonathan', 80, 'retired');
grandad.aboutMe(); // I'm Jonathan, I'm 80 years old and I'm retired.

class Father extends Grandfather {
  constructor(name, age, job) {
    super(name, age, job);
  }
}

let dad = new Father('John', 40, 'coder');
dad.aboutMe(); // I'm John, I'm 40 years old and I'm a coder.

class Son extends Father {
  constructor(name, age, job) {
    super(name, age, job);
  }

  aboutMe = function() {
    console.log(`I refuse to answer!`);
  }
}

let son = new Son('Johnny', 18, 'student');
son.aboutMe(); // I refuse to answer!

