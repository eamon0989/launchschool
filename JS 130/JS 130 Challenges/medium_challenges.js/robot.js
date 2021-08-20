/*
When a robot is created, a random name is generated

*/

// RX837 or BC811

console.log(Math.random() * 5);

class Robot {
  constructor() {
    this.robotName = this.name();
  }

  name() {
    if (!this.robotName) {
      let name = this.nameGenerator();
      // if (Robot.takenNames.includes(name)) {
      //   name = this.nameGenerator();
      // }
      // Robot.takenNames.push(name);
      return name;
    } else {
      return this.robotName;
    }
  }

  nameGenerator() {
    let letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let numbers = `1234567890`;
    let name = '';
    for (let i = 0; i < 2; i += 1) {
      name += letters[Math.floor(Math.random() * letters.length)];
    }

    for (let i = 0; i < 3; i += 1) {
      name += numbers[Math.floor(Math.random() * numbers.length)];
    }

    return name;
  }

  // static takenNames = [];
}

let robot = new Robot();
robot.name();
console.log(robot);
// console.log(robot);

module.exports = Robot;