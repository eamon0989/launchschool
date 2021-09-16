// // let array = new Array(3).fill(undefined);
// // console.log(array); // [ undefined, undefined, undefined ]

// // let numbers = new Array(1, 2, 3, 4);
// // console.log(numbers); // [ 1, 2, 3, 4 ]

// // let numbers = [1, 2, 3];
// // console.log(Object.getPrototypeOf(numbers) === Array.prototype);
// // console.log(Object.getPrototypeOf(Array.prototype));
// // console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);
// // console.log(Object.prototype.isPrototypeOf(Array.prototype));
// // console.log(Array.prototype);
// // Object.getPrototypeOf(numbers);

// // let string = 'EEE';
// // console.log(Array.prototype.every.call(string, char => char === 'E')); // => true
// // console.log([].every.call(string, char => char === 'E')); // => true
// // let name = `Eamon O'Callaghan`;
// // [].forEach.call(name, char => console.log(char));
// // console.log(name);

// // function Factory() {
// //   this.hi = 'Hello';
// // }

// // let hey = new Factory();
// // console.log(hey);

// // console.log(Factory.prototype.constructor === Factory); // true

// // let obj = {};
// // console.log(obj.constructor);
// // console.log(Object.prototype.constructor === Object);

// // console.log(hey.__proto__ === Factory.prototype);
// // console.log(Factory.prototype.isPrototypeOf(hey));
// // hey.__proto__ = Object.prototype;
// // console.log(hey.__proto__);
// // console.log(Factory.prototype.isPrototypeOf(hey));
// // console.log(Object.prototype.isPrototypeOf(hey));

// // const Animal = function(species) {
// //   this.species = species;
// //   return species;
// // };

// // Animal.prototype.sleep = function() {
// //   console.log(`The ${this.species} is sleeping`);
// // };

// // let lion = new Animal('Panthera leo');
// // lion.sleep(); // The Panthera leo is sleeping

// // function Pet(type) {
// //   return {};
// // }

// // let cat = new Pet('cat');
// // console.log(cat.constructor); // [Function: Object]
// // console.log(cat instanceof Pet); // false

// // function Dog() {
// // }

// // function Pet(type) {
// //   if (type === 'dog') return new Dog();
// // }

// // let dog = new Pet('dog');
// // console.log(dog instanceof Dog); // true
// // console.log(dog instanceof Pet); // false

// // console.log(typeof Pet.constructor);
// // console.log(typeof Pet.prototype);
// // console.log(typeof Pet.__proto__);

// let obj = {};

// // console.log(obj.constructor === Object.prototype.constructor); // true
// // console.log(obj.constructor === Object); // true

// // function Pet(type) {
// // }

// // let dog = new Pet('dog');
// // console.log(dog.constructor === Object); // false
// // console.log(dog.constructor === Pet.prototype.constructor); // true

// // console.log(obj.getPrototypeOf());
// // console.log(Object.getPrototypeOf(Object) === Object.__proto__);
// // console.log(Object.getPrototypeOf(Object.__proto__));
// // console.log(Object.getPrototypeOf(Object));
// // console.log(Object.getPrototypeOf(Object.prototype));
// // console.log(Object.getPrototypeOf(obj) === Object.prototype);
// // console.log(obj.hasOwnProperty('prototype'));
// // console.log(Object.getPrototypeOf(obj));

// function Car(){

// }

// // let mercedes = new Car();
// // console.log(mercedes.constructor);
// // console.log(Car.prototype === Object.prototype);
// // console.log(Object.getPrototypeOf(Car.prototype) === Object.prototype);
// // console.log(typeof Object.prototype);
// // console.log(typeof Car.prototype);

// // console.log(mercedes instanceof Car);

// // console.log(Object.getPrototypeOf(mercedes) === Car.prototype);
// // console.log(mercedes.constructor);
// // console.log(Car.prototype.constructor);

// // console.log(Object.prototype.constructor);
// // console.log(Object.prototype.__proto__);
// // console.log(Object.__proto__ === Object.prototype.constructor);
// // console.log(Object.getPrototypeOf(Object.prototype) === Object.__proto__);
// // console.log(Object.prototype === Object.__proto__);
// // console.log(obj.__proto__ === Object.prototype); // true
// // console.log(Object.__proto__ === Object.getPrototypeOf(Object));
// // // console.log(Object.__proto__ === Object.prototype);
// // // console.log(typeof Object);
// // // console.log(Object);

// // console.log(Car.constructor);
// Object.prototype.hi = 'This is Object.prototype';
// Car.prototype.hi = 'This is Car.prototype';

// console.log(Object.prototype);
// // console.log(Object.__proto__ === Object.prototype); // false
// console.log(Car.__proto__ === Object.getPrototypeOf(Car));
// // console.log(Car.__proto__);
// console.log(Object.getPrototypeOf(Object) === Function.prototype);
// console.log(Object.getPrototypeOf(Object) === Object.__proto__);
// console.log(Object.prototype === Function.prototype);
// // console.log(Object.getPrototypeOf(Car));

// console.log(Function.prototype === Object.getPrototypeOf(Object.prototype));
// console.log(Function.prototype === Object.getPrototypeOf(Object));

// Function.prototype
// ƒ () { [native code] }
// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()arguments: (...)assign: ƒ assign()caller: (...)create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()fromEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()arguments: (...)caller: (...)length: 1name: "isPrototypeOf"[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)caller: (...)length: 2name: "apply"[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// typeof Function.prototype
// "function"
// typeof Object.prototype
// "object"
// Function.__proto__
// ƒ () { [native code] }
// function Car(){

// }
// undefined
// Car.__proto__ === Function.prototype
// true
// Car.constructor
// ƒ Function() { [native code] }
// Object.constructor
// ƒ Function() { [native code] }
// Object.prototype.constructor
// ƒ Object() { [native code] }
// Object.constructor === Function.prototype
// false
// Function.__proto__
// ƒ () { [native code] }
// Function.__proto__ === Object.__proto__
// true
// Object.prototype.__proto__
// null
// Object.prototype.__proto__ === Function.prototype
// false
// Object.prototype.__proto__ === Function.prototype.__proto__
// false
// Car.prototype
// {constructor: ƒ}constructor: ƒ Car()arguments: nullcaller: nulllength: 0name: "Car"prototype: {constructor: ƒ}[[FunctionLocation]]: VM283:1[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[1][[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// Car.prototype.__proto__ === Object
// false
// Car.prototype.__proto__ === Object.prototype
// true
// Car
// ƒ Car(){

// }
// Car.__proto__
// ƒ () { [native code] }
// Car.__proto__ === Function.prototype
// true
// Car.constructor
// ƒ Function() { [native code] }
// Car.constructor === Function
// true
// Function.constructor
// ƒ Function() { [native code] }
// Function.constructor === Function
// true
// Function.prototype.constructor
// ƒ Function() { [native code] }
// Function.prototype.constructor === Function
// true
// Obj.__proto__ === Object.prototype
// VM1358:1 Uncaught ReferenceError: Obj is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1358:1
// obj.__proto__ === Object.prototype
// VM1369:1 Uncaught ReferenceError: obj is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1369:1
// let obj = {};
// undefined
// obj.__proto__ === Object.prototype
// true
// Function.constructor
// ƒ Function() { [native code] }
// Function.constructor === Function.prototype.constructor
// true
// Object.constructor === Function.prototype.constructor
// true
// Object.constructor === Function
// true
// Car.constructor === Object.constructor
// true
// Car.constructor === Function
// true
// Function.prototype
// ƒ () { [native code] }
// typeof Function.prototype
// "function"
// Function.prototype.__proto__ === Object.prototype
// true
// Object.getPrototypeOf(Function.prototype)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()arguments: (...)assign: ƒ assign()caller: (...)create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()fromEntries: ƒ fromEntries()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()arguments: (...)caller: (...)length: 1name: "isPrototypeOf"[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// typeof Function.prototype
// "function"
// Car.__proto__ === Object.prototype
// false
// typeof Function.prototype.__proto__ === Object.prototype
// false
// Function.prototype.__proto__ === Object.prototype
// true
// Function.prototype.constructor
// ƒ Function() { [native code] }
// Function.prototype.constructor === Function
// true
// Function.constructor
// ƒ Function() { [native code] }
// Function.constructor === Function.prototype.constructor
// true
// Object.getPrototypeOf(car)
// VM2440:1 Uncaught ReferenceError: car is not defined
//     at <anonymous>:1:23
// (anonymous) @ VM2440:1
// Object.getPrototypeOf(Car)
// ƒ () { [native code] }
// Object.getPrototypeOf(Car) === Function.prototype
// true
// Object.constructor
// ƒ Function() { [native code] }
// Object.constructor === Function.prototype.constructor
// true
// Object.constructor === Object.prototype.constructor
// false