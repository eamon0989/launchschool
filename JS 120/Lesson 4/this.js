'use strict';

console.log(this);


// let object = {
//   subject: 'execution context',
//   adjective: 'fun',
//   printString() {
//     console.log(`Learning about ${this.subject} is ${this.adjective}!`);
//   }
// };

// let anotherObject = {
//   subject: 'the this binding',
//   adjective: 'very important',
// };

// let func = object.printString;
// func.call(anotherObject); // Learning about the this binding is very important!

// // function printString() {
// //   console.log(`Learning about ${this.subject} is ${this.adjective}!`);
// // }

// // printString(); // Learning about undefined is undefined!

// function printString() {
//   console.log(`Learning about ${this.subject} is ${this.adjective}!`);
// }

// global.subject = 'execution context';
// global.adjective = 'fun';

// printString(); // Learning about execution context is fun!

// function whatsThis() {
//   console.log(`this is pointing to: ${this}`);
// }

// whatsThis(); // this is pointing to: [object global]

// console.log(Function.prototype.hasOwnProperty('call'));

// let arrow = () => console.log(this);
// arrow();
// arrow.call(object);
// console.log(Object.getPrototypeOf(arrow));
// console.log(Function.prototype.isPrototypeOf(arrow));

// let object = {
//   subject: 'execution context',
//   adjective: 'fun',
//   printString() {
//     console.log(`Learning about ${this.subject} is ${this.adjective}!`);
//   }
// };

// let anotherObject = {
//   subject: 'the this binding',
//   adjective: 'very important',
// };

// let func = object.printString;
// let newFunc = func.bind(anotherObject);
// newFunc(); // Learning about the this binding is very important!

// // console.log(Function.prototype.hasOwnProperty('bind'));
// global.anotherArray = ['','this', 'is','awesome!'];

// let object = {
//   anArray: [0, 1, 2],
//   anotherArray: ['this', 'is','awesome!'],
//   printProps() {
//     this.anArray.forEach(function(number) {
//       console.log(`${this.anotherArray[number]}`);
//     });
//   }
// };

// object.printProps(); // TypeError: Cannot read property '0' of undefined

// let object = {
//   anArray: [0, 1, 2],
//   anotherArray: ['this', 'is','awesome!'],
//   printProps() {
//     this.anArray.forEach(number => {
//       console.log(`${this.anotherArray[number]}`);
//     });
//   }
// };

// object.printProps(); // this is awesome!

// let object = {
//   subject: 'execution context',
//   adjective: 'fun',
//   addProp(property) {
//     this.verb = property;
//     let that = object;
//     that.otherVerb = 'memorize';
//   }
// };

// object.addProp('learn');
// console.log(object);



// let arrow = () => console.log(`This points to: ${this.name}`);

// let obj = {
//   name: 'Eamon',
//   arrow: () => console.log(this),
//   anotherObj: {
//     name: 'Eamon',
//     arrow: () => console.log(`This points to: ${this}`),
//   }
// }
// obj.arrow();
// obj.anotherObj.arrow();

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password; 
//   }
// }

// class Student extends User {
//   constructor(email, password, name, major) {
//     super(email, password); 
//     this.name = name;
//     this.major = major; 
//   }
// }


// const student = new Student('sergio@example.com', 'asdf', 'Sergio', 'Computer Science');
// console.log(student);
// console.log(User.prototype.hasOwnProperty('constructor'));

// let stu = new Student.constructor();
// console.log(stu);

let school = {
  name: 'Launch School',
}

let student = {
  name: 'Eamon',
  // school: school,
  // getInfo() {
  //   console.log(`${this.name} is a student at ${this.school.name}`);
  // }
}

// student.getInfo();

let obj = Object.create(null);
console.log(obj);
Object.assign(obj, student, school);
console.log(obj);