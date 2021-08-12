class Shelter {
  adopt(person, pet) {
    if (Shelter.adoptions[person.name]) {
      Shelter.adoptions[person.name].push(pet);
    } else {
      Shelter.adoptions[person.name] = [];
      Shelter.adoptions[person.name].push(pet);
    }

    person.addPet();
  }

  printAdoptions() {
    for (let prop in Shelter.adoptions) {
      console.log(`${prop} has adopted the following pets:`);
      Shelter.adoptions[prop].forEach(obj => console.log(`a ${obj.animal} named ${obj.name}`));
    }
  }
}

Shelter.adoptions = {};

class Pet extends Shelter {
  constructor(animal, name) {
    super();
    this.animal = animal;
    this.name = name;
  }
}

class Owner extends Shelter {
  constructor(name) {
    super();
    this.name = name;
    this.pets = 0;
  }

  numberOfPets() {
    return this.pets;
  }

  addPet() {
    this.pets += 1;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
// console.log(Shelter.adoptions);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);