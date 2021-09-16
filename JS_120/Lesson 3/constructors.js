// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = false;

//   this.start = function() {
//     this.started = true;
//   };

//   this.stop = function() {
//     this.started = false;
//   };
// }

// let corolla = new Car('Toyota', 'Corolla', 2016);
// let leaf = new Car('Nissan', 'LEAF', 2018);
// let nova = new Car('Chevrolet', 'Nova', 1974);

// console.log(corolla);
// console.log(nova);

// function Car(args) {
//   this.make = args.make;
//   this.model = args.model;
//   this.year = args.year;
//   this.color = args.color;
//   this.passengers = args.passengers;
//   this.convertible = args.convertible;
//   this.mileage = args.mileage;
//   this.started = false;

//   this.drive = function() {
//     this.started = true;
//   };

//   // rest of methods
// }

// function Car(args) {
//   Object.assign(this, args);

//   this.drive = function() {
//     this.started = true;
//   };

//   // rest of the methods
// }

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

// console.log(civic);

// console.log(civic instanceof Car);

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?