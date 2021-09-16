const towMixin = {
  tow() {
    return `I can tow a trailer!`;
  }
};

class Truck {
  constructor() {
    Object.assign(this, towMixin);
  }
}

class Car {}

let truck = new Truck();
console.log(truck.tow());