class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }

  getWheels() {
    return 6;
  }
}

let truck = new Truck('toyota', 'corolla', 1000);
console.log(truck.info());
console.log(truck.getWheels());

let car = new Car('toyota', 'corolla');
console.log(car, truck);
console.log(car.constructor, truck.constructor);