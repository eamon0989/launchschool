// class Chef {
//   prepare(wedding) {
//     this.prepareFood(wedding.guests);
//   }

//   prepareFood(guests) {
//     console.log(guests);
//   }
// }

// class Decorator {
//   prepare(wedding) {
//     this.decoratePlace(wedding.flowers);
//   }

//   decoratePlace(flowers) {
//     console.log(flowers);
//   }
// }

// class Musician {
//   prepare(wedding) {
//     this.preparePerformance(wedding.songs);
//   }

//   preparePerformance(songs) {
//     console.log(songs);
//   }
// }

// class Wedding {
//   constructor(guests, flowers, songs) {
//     this.guests = guests;
//     this.flowers = flowers;
//     this.songs = songs;
//   }

//   prepare(preparers) {
//     preparers.forEach(preparer => {
//       preparer.prepare(this);
//     });
//   }
// }

// let chef = new Chef();
// let decorator = new Decorator();
// let musician = new Musician();
// let wedding = new Wedding('Me and Paula', 'Roses', 'Cool songs');
// console.log(wedding);
// wedding.prepare([chef, decorator, musician]);


// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   makeNoise() {
//     console.log(`Howdy partner!`);
//   }
// }

// class Baby {
//   makeNoise() {
//     console.log(String.fromCodePoint('0x1F62D').repeat(3));
//   }
// }

// class Vehicle {
//   constructor(wheels) {
//     this.wheels = wheels;
//   }

//   makeNoise() {
//     console.log(`Beep BEEEEEEP`);
//   }
// }

// class Animal {
//   makeNoise() {
//   }
// }

// let man = new Human('John');
// let car = new Vehicle();
// let cow = new Animal();
// let baby = new Baby();

// [man, car, cow, baby].forEach(type => type.makeNoise());


// class Duck {
//   quack = () => console.log(String.fromCodePoint('0x1F986').repeat(3));
// }

// class Dog {
//   quack = () => console.log(String.fromCodePoint('0x1f415').repeat(3));
// }

// let quack = (possibleDuckImposter) => possibleDuckImposter.quack();

// let duck = new Duck();
// let dog = new Dog();

// quack(duck); // 🦆🦆🦆
// quack(dog); // 🐕🐕🐕

// // number x = 10;
// // string y = String.fromCodePoint('0x1F986');
// // console.log(number x + number y); // error: typeof y is not number
// // // This is NOT real code, it's just an example

// let x = 10;
// let y = String.fromCodePoint('0x1F986');
// console.log(x + y); // 10🦆
// // This is actual code, it works

// number x = 10;
// string y = String.fromCodePoint('0x1F986');
// console.log(number x + number y); // Error: typeof y is not number
// // This is NOT real code, it's just an example


// // {
// //   public void Quack() { ... }
// //   public void Walk() { ... }
// // }
// // class OtherDuck
// // {
// //   public void Quack() { ... }
// //   public void Walk() { ... }
// // }
// // ...
// // void M(Duck bird)
// // {
// //   bird.Quack();
// //   bird.Walk();
// // }
// // ...
// // M(new Duck()); // Legal
// // M(new OtherDuck()); // Illegal

// ['aeiou', ['a', 'e'], 1].forEach(obj => console.log(obj.indexOf('e')));
// TypeError: obj.indexOf is not a function

// ['aeiou', ['a', 'e']].forEach(obj => console.log(obj.indexOf('e'))); // 1, 1

// class Duck {
//   type = () => console.log('💻'.repeat(3));
// }

// class Cat {
//   type = () => console.log('💻'.repeat(3));
// }

// let makeDucksType = (possibleDuckImposter) => possibleDuckImposter.type();

// let duck = new Duck();
// let cat = new Cat();

// [duck, cat].forEach(obj => makeDucksType(obj)); // 💻💻💻, 💻💻💻

class Duck {
  quack = () => console.log(String.fromCodePoint('0x1F986').repeat(3));
}

class Dog {
  quack = () => console.log(String.fromCodePoint('0x1f415').repeat(3));
}

let quack = (possibleDuckImposter) => possibleDuckImposter.quack();

let duck = new Duck();
let dog = new Dog();

[duck, dog].forEach(obj => quack(obj)); // 🦆🦆🦆, 🐕🐕🐕


// quack(duck); // 🦆🦆🦆
// quack(dog); // 🐕🐕🐕