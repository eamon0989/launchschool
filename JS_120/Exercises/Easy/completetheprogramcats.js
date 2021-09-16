class Pet {
  constructor(name, age, colors) {
    this.name = name;
    this.age = age;
    this.colors = colors;
  }

  info() {
    return `${this.name} is ${this.age} years old and has ${this.colors} fur.`;
  }
}

class Cat extends Pet {

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

