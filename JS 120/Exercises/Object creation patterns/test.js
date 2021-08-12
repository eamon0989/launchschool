/* function Grandfather(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Grandfather.prototype.aboutMe = function() {
  console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
};

let grandad = new Grandfather('Jonathan', 80, 'retired');
grandad.aboutMe(); // I'm Jonathan, I'm 80 years old and I'm retired.
console.log(grandad); // Grandfather { name: 'Jonathan', age: 80, job: 'retired' }

function Father(name, age, job) {
  Grandfather.call(this, name, age, job);
}

Father.prototype = Object.create(Grandfather.prototype);

let dad = new Father('John', 40, 'coder');
dad.aboutMe(); // I'm John, I'm 40 years old and I'm a coder.

function Son(name, age, job) {
  Father.call(this, name, age, job);
}

Son.prototype = Object.create(Father.prototype);

let son = new Son('Johnny', 18, 'student');
son.aboutMe(); // I'm Johnny, I'm 18 years old and I'm a student.

console.log(son instanceof Son); // true
console.log(Father.prototype.isPrototypeOf(Son.prototype)); // true
console.log(Grandfather.prototype.isPrototypeOf(Son.prototype)); // true
console.log(son); // Grandfather { name: 'Johnny', age: 18, job: 'student' } */

let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};
/* 
let pete = {
  name: 'Pete',
  pet: cat,
  petName: cat.name,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },
};

pete.printName(); // My name is Pete! My pet's name is Fluffy
console.log(pete.pet);
/* {
  name: 'Fluffy',
  makeNoise: [Function: makeNoise],
  eat: [Function: eat]
} */

// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42
// };

// obj.num = sumNum.call(obj, 5);
// console.log(obj.num); // => 47

// var sortedSquares = function(nums) {
//   nums = nums.map(num => num * num);
  
//       let p1 = 0;
//       let p2 = 1;
//       while (true) {
//           let notMutated = true;
//           for (p1 = 0; p1 < nums.length - 1; p1 += 1, p2 += 1) {
//               console.log(nums[p1] > nums[p2], nums[p1], nums[p2])
//               if (nums[p1] > nums[p2]) {
//                   [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
//                   notMutated = false;
//               }
//           }


//           if (notMutated === true) {
//               break;
//           }

//           p1 = 0;
//           p2 = 1;
//       }


//   return nums;
// };

// console.log(sortedSquares([-4,-1,0,3,10]));

// function createGreeter(language) {
//   switch (language) {
//     case 'en':
//       return () => console.log('Hello!');
//     case 'es':
//       return () => console.log('Hola!');
//     case 'fr':
//       return () => console.log('Bonjour!');
//   }
// }

// let greeterEs = createGreeter('es');
// greeterEs(); // logs 'Hola!'
// greeterEs(); // logs 'Hola!'
// greeterEs(); // logs 'Hola!'

// let greeterEn = createGreeter('en');
// greeterEn(); // logs 'Hello!'

// console.log(greeterEs); // [Function (anonymous)]

// let hola = () => console.log('Hola!');
// hola();

// function func() {};
// console.log(global.func);

// function Car(args) {
//   Object.assign(this, args);
// }

// Car.prototype.drive = function() {
//   this.started = true;
// };

// let civicArgs = {
//   make: 'Honda',
//   model: 'Civic',
//   year: 2016,
//   color: 'black',
//   passengers: 5,
//   convertible: false,
//   mileage: 16000
// };

// let civic = new Car(civicArgs);
// civic.drive();
// console.log(civic);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi, my names ${this.name}.`);
//   }
// }

// class Man extends Person {
//   constructor(name, job) {
//     super(name);
//     // this.name = name;
//     this.job = job;
//   }

//   sayHi() {
//     console.log(`Hi, my names ${this.name} and I'm a ${this.job}.`);
//   }
// }

// let me = new Man('Eamon', 'coder');
// console.log(me);
// me.super.sayHi();

// class Animal {
//   constructor(name, weight) {
//       this.name = name;
//       this.weight = weight;
//   }

//   eat() {
//       return `${this.name} is eating!`;
//   }
// }

// class Gorilla extends Animal {
//   constructor(name, weight) {
//       super(name, weight);
//   }

//   poundChest() {
//       return `${this.name} is pounding its chest!`;
//   }

//   showVigour() {
//       return `${super.eat()} ${this.poundChest()}`;
//   }
// }

// function display(content) {
//   console.log(content);
// }

// const gorilla = new Gorilla('George', '160Kg');
// display(gorilla.poundChest());
// display(gorilla.showVigour());



// dog.makeSound(); // sound
// dog.hasOwnProperty('makeSound'); //false

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// Object.assign(target, source);

// console.log(target); // { a: 1, b: 4, c: 5 }
// // console.log(returnedTarget);// { a: 1, b: 4, c: 5 }

// console.log(target.a = 5);
// console.log(target); // { a: 5, b: 4, c: 5 }
// // console.log(returnedTarget); // { a: 5, b: 4, c: 5 }

// class Family {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let catMixIn = {
//   hunt: function() {
//     console.log(`Hunting`);
//   }
// };

// let humanMixIn = {
//   petCat: function(catName) {
//     console.log(`Petting ${catName.name}`);
//   }
// };

// let eamon = new Family('Eamon', 30);
// let paula = new Family('Paula', 31);
// let sancho = new Family('Sancho', 3);
// Object.assign(sancho, catMixIn);
// Object.assign(eamon, humanMixIn);
// Object.assign(paula, humanMixIn);

// sancho.hunt();
// paula.petCat(sancho);

// const Swimmable = {
//   swim() {};
// }

// class Bird {}

// class FlyingBird extends Bird {
//   fly() {}
// }

// class Stork extends FlyingBird {}

// class Parrot extends FlyingBird {}

// class Penguin extends Bird {}
// Object.assign(Penguin.prototype, Swimmable);

// class Ostrich extends Bird {}
// Object.assign(Ostrich.prototype, Swimmable);

// class Duck extends FlyingBird {}
// Object.assign(Duck.prototype, Swimmable);

// class Goose extends FlyingBird {}
// Object.assign(Goose.prototype, Swimmable);

// let obj = {
//   prop: 'works',
//   test: 'tester',
//   ' ': 1,
//   1: 2,
//   '!tea': 3,
//   true: 'false',
// }

// console.log(obj[' ']);
// console.log(obj[1]);
// // console.log(obj.1);
// console.log(obj['!tea']);
// console.log(obj['prop']);
// console.log(obj.true);
// // console.log(obj. );
// // console.log(obj. );
// // console.log(obj. );

// let shirt = {
//   a : 'Hello',
//   b : 'World',
//   foo : function () {
//     console.log(this.a + this.b)
//   }
// }

// //shirt.foo() => //
// let someVar = shirt.foo.bind(shirt);  //
// someVar(); // //HelloWorld

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static sayHi() {
//     console.log('Hi');
//   }
// }

// class Child extends Person {
//   constructor(name) {
//     super(name);
//   }
//   sayHi() {
//     console.log(`Howdy`);
//   }

//   sayAdultHi() {
//     super.sayHi();
//   }
// }


// let jack = new Child('Jack');
// jack.sayAdultHi();
// jack.super.sayHi();

// let obj = {
//   Costruct(name) {
//     this.name = name;
//   },

//   Constructor: function(name) {
//     this.name = name;
//   }
// }

// let obj1 = new obj.Construct('Eamon');
// console.log(obj1);

// function Construct() {
//   if (!(this instanceof Construct)) {
//     return new Construct(arguments);
//   }
// }

// let object = Construct();
// console.log(object); // Construct {}


// // class Construct1 {

// // }

// // let classy = new Construct1();

// console.log(object.constructor); // [Function: Construct]
// console.log(Construct.constructor); // [Function: Function]

// function PigFactory(name, weight, color) {
//   this.name = name;
//   this.weight = weight;
//   this.color = color;
// }


// PigFactory.prototype.weighPig = function weighPig() {
//   console.log(`${this.name} weights ${this.weight} kg.`);
// };

// let piggy = new PigFactory('Babe', 100, 'pink');
// piggy.weighPig(); // Babe weights 100 kg.

// function testFunc() {
//   this.a = 'Hello'
//   let func = () => {
//     console.log('Value of this:', this)
//     }
//   func();
// }

// testFunc();
// console.log(global.a);

// let obj = {
//   a : 'Hello',
//   b : 'World',
//   func : () => console.log(this.a)
// }

// obj.func();
// let someVar = obj.func;

// function anotherFunc(foo) {
//   foo();
//   foo();
// }

// anotherFunc(someVar);

// var str1 = new String("abc");
// var str2 = new str1.constructor("xyz");
// console.log(str2 instanceof String);

// class Func {}
// let funky = new Func;
// let funkyTown = new funky.constructor;
// console.log(funkyTown.constructor); // [Function: Func]
// console.log(funkyTown instanceof Func); // true
// // console.log(funky.constructor);

function Super(x) {
  this.x = x;
}

Super.prototype.foo = 1;

function Sub(x, y) {
  Sub.superclass.constructor.call(this, x); // (*)
  this.y = y;
}
Sub.superclass = Super.prototype;
Sub.prototype = Object.create(Sub.superclass);
Sub.prototype.constructor = Sub;

let object = new Sub(1, 2);
console.log(object); // Sub { x: 1, y: 2 }
console.log(object instanceof Super); // true
console.log(object instanceof Sub); // true