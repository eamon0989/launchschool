class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    return this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    return this.greet('Goodbye');
  }
}

let hey = new Hello();
hey.hi();

let cya = new Goodbye();
cya.bye();
