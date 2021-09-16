// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   Dog.allDogs.push(this);
// }

// Dog.species = "Canis lupus";
// Dog.allDogs = [];

// let doggy = new Dog('Prince', 'shepard', 'fat');
// let doggy1 = new Dog('Jumbo', 'elephant', 'fat');
// console.log(doggy);
// console.log(Dog.allDogs);

// Dog.showSpecies = function() {
//   console.log(`Dogs belong to the species ${Dog.species}`);
// };

// Dog.showSpecies();
// console.log(Dog);

function Dog(name, breed, weight) {
  this.name = name;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];
Dog.species = "Canis lupus";

console.log(Dog); // [Function: Dog] { allDogs: [], species: 'Canis lupus' }


