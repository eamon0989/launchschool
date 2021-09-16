/* const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);


class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Truck.prototype, Speed);


let car = new Car();
let truck = new Truck();

car.goFast();
truck.goFast();

console.log('goFast' in car);
console.log('goFaster' in car);
console.log(Car.prototype);

let car = new Car();
console.log(car.constructor.name); // Car */


/* let distance = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}
Object.assign(Auto.prototype, distance);

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}
Object.assign(Motorcycle.prototype, distance);


class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

Object.assign(Catamaran.prototype, distance);

let car = new Auto();
console.log(car.range());

let moto = new Motorcycle();
console.log(moto.range());

let cat = new Catamaran();
console.log(cat.range());
 */

// function Child(name, school) {
//   name personalbar(name);
// }

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// // missing code

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log();

// let person = new Person("Pete");
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// function Child(name, school) {
//   console.log(this);
//   Person.call(this, name);
//   console.log(this);
//   this.school = school;
//   console.log(this);
// }

// let child = new Child("Suzy", "PS 33");
// console.log(child); // Child { name: 'Suzy', school: 'PS 33' }

// Person.prototype.speak = function() {
//   return `Hello, my name is ${this.name}.`;
// };

// Child.prototype.learn = function() {
//   return "I'm going to school!";
// };

// // let child = new Child("Suzy", "PS 33");
// console.log(child instanceof Child);                               // true
// console.log(child instanceof Person === false);                    // true
// console.log(Object.getPrototypeOf(child) === Child.prototype);     // true
// console.log(Object.getPrototypeOf(child).constructor === Child);   // true
// console.log(child.school === "PS 33");                             // true
// console.log(child.learn() === "I'm going to school!");             // true
// console.log(child);

// let person = new Person("Pete");
// let person2 = Person.call(this, "Pete");
// console.log(person);
// console.log(person2);
// console.log(person instanceof Child === false);                    // true
// console.log(person instanceof Person);                             // true
// console.log(Object.getPrototypeOf(person) === Person.prototype);   // true
// console.log(Object.getPrototypeOf(person).constructor === Person); // true
// console.log(person.school === undefined);                          // true
// console.log(person.speak() === "Hello, my name is Pete.");         // true

let superPowerMixin = {
  superPower() {
    console.log(`I'm flying!!!`);
  }
};

class Human {
  constructor(name) {
    this.name = name;
  }
}

class SuperHuman extends Human {
  superPower() {
    console.log(`I'm flying!!!`);
  }
}

class Child extends Human {}

let superBaby = new Child('Clark');
Object.assign(superBaby, superPowerMixin);
superBaby.superPower();