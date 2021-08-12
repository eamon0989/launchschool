"sue strict";

// let obj = {
//   name: 'Eamon',
//   print() {
//     console.log(`His name is ${this.name}.`);
//   }
// };

// obj.print();
// let prin = obj.print;
// prin();

// class Vehicle {
//   static convert(mpg) {
//     return 235.21 / mpg;
//   }

//   addMPG(MPG) {
//     this.MPG = MPG;
//   }
// }

// class Grandfather {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }

//   aboutMe() {
//     console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
//   }
// }

// class Father extends Grandfather {
// }

// class Son extends Father {
// }

// let grandad = new Grandfather('Jonathan', 80, 'retired');
// grandad.aboutMe(); // I'm Jonathan, I'm 80 years old and I'm retired.

// let dad = new Father('John', 40, 'coder');
// dad.aboutMe(); // I'm John, I'm 40 years old and I'm a coder.

// let son = new Son('Johnny', 18, 'student');
// son.aboutMe(); // I'm Johnny, I'm 18 years old and I'm a student.

// console.log(son instanceof Son); // true
// console.log(son instanceof Grandfather); // true
// console.log(Father.prototype.isPrototypeOf(Son.prototype)); // true
// console.log(Grandfather.prototype.isPrototypeOf(Son.prototype)); // true
// console.log(son); // Grandfather { name: 'Johnny', age: 18, job: 'student' }

// let carPrototype = {
//   start: function() {
//   this.started = true;
// },

// stop: function() {
//   this.started = false;
// },

// init(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   return this;
// },
// };

// let car1 = Object.create(carPrototype).init('Toyota', 'Corolla', 2016);

// let humanPrototype = {
//   aboutMe: function() {
//     console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
//   },

//   init(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     return this;
//   }
// };

class Grandfather {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  aboutMe() {
    console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
  }
}

class Father extends Grandfather {
  aboutMe() {
    console.log(`I'm ${this.name}, I'm ${this.age} years old and I'm sick of working as ${this.job === 'retired' ? '' : 'a '}${this.job}.`);
  }
}

class Son extends Father {
  aboutMe() {
    console.log(`Go away!`);
  }
}

let grandad = new Grandfather('Jonathan', 80, 'retired');
grandad.aboutMe(); // I'm Jonathan, I'm 80 years old and I'm retired.

let dad = new Father('John', 40, 'coder');
dad.aboutMe(); // I'm John, I'm 40 years old and I'm sick of working as a coder.

let son = new Son('Johnny', 18, 'student');
son.aboutMe(); // Go away!
