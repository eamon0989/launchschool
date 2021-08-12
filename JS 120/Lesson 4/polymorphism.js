// class Animal {
//   move() {}
// }

// class Fish extends Animal {
//   move() {
//     console.log("swimming");
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log("walking");
//   }
// }

// // Sponges and Corals don't have a separate move method - they don't move
// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
// animals.forEach(animal => animal.move());

// class Human {
//   work() {
//     console.log(`I'm off to ${this.workplace}!`);
//   }
// }

// class Dad extends Human {
//   constructor() {
//     super();
//     this.workplace = 'the office';
//   }
// }

// class Child extends Human {
//   constructor() {
//     super();
//     this.workplace = 'school';
//   }
// }

// class Baby extends Human {
//   work() {
//     console.log(`Waaaaaaah`);
//   }
// }

// let dad = new Dad();
// let son = new Child();
// let baby = new Baby();

// dad.work(); // I'm off to the office!
// son.work(); // I'm off to school!
// baby.work(); // Waaaaaaah


// class Mom extends Human {
//   constructor() {
//     super();
//     this.workplace = 'the supermarket';
//   }
// }

class Human {
  constructor() {

  }

  test = function() {};
}

let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },

  Cart(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

// Functions have prototypes, but not array functions.
// Methods in an object have prototypes, but not methods defined using
// concise syntax

let car1 = new foo.Car('Toyota', 'Camry', 2019);
// console.log(car1.make); //=> 'Toyota'
console.log(foo.Car.prototype);
console.log(foo.Cart.prototype);

// console.log(Human.test.prototype);

// let arrow = () => {};
// console.log(typeof arrow.prototype);

// let expr = function() {

// }

// console.log(expr.prototype);

// console.log(Object.getOwnPropertyNames(Date.prototype));
// [
//   'constructor',        'toString',           'toDateString',
//   'toTimeString',       'toISOString',        'toUTCString',
//   'toGMTString',        'getDate',            'setDate',
//   'getDay',             'getFullYear',        'setFullYear',
//   'getHours',           'setHours',           'getMilliseconds',
//   'setMilliseconds',    'getMinutes',         'setMinutes',
//   'getMonth',           'setMonth',           'getSeconds',
//   'setSeconds',         'getTime',            'setTime',
//   'getTimezoneOffset',  'getUTCDate',         'setUTCDate',
//   'getUTCDay',          'getUTCFullYear',     'setUTCFullYear',
//   'getUTCHours',        'setUTCHours',        'getUTCMilliseconds',
//   'setUTCMilliseconds', 'getUTCMinutes',      'setUTCMinutes',
//   'getUTCMonth',        'setUTCMonth',        'getUTCSeconds',
//   'setUTCSeconds',      'valueOf',            'getYear',
//   'setYear',            'toJSON',             'toLocaleString',
//   'toLocaleDateString', 'toLocaleTimeString'
// ]
