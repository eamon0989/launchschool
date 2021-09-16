class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let kitty = new Cat('Sophie');
kitty.greet();