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
// ?? () { [native code] }
// Object.prototype
// {constructor: ??, __defineGetter__: ??, __defineSetter__: ??, hasOwnProperty: ??, __lookupGetter__: ??,?????}constructor: ?? Object()arguments: (...)assign: ?? assign()caller: (...)create: ?? create()defineProperties: ?? defineProperties()defineProperty: ?? defineProperty()entries: ?? entries()freeze: ?? freeze()fromEntries: ?? fromEntries()getOwnPropertyDescriptor: ?? getOwnPropertyDescriptor()getOwnPropertyDescriptors: ?? getOwnPropertyDescriptors()getOwnPropertyNames: ?? getOwnPropertyNames()getOwnPropertySymbols: ?? getOwnPropertySymbols()getPrototypeOf: ?? getPrototypeOf()is: ?? is()isExtensible: ?? isExtensible()isFrozen: ?? isFrozen()isSealed: ?? isSealed()keys: ?? keys()length: 1name: "Object"preventExtensions: ?? preventExtensions()prototype: {constructor: ??, __defineGetter__: ??, __defineSetter__: ??, hasOwnProperty: ??, __lookupGetter__: ??,?????}seal: ?? seal()setPrototypeOf: ?? setPrototypeOf()values: ?? values()[[Prototype]]: ?? ()[[Scopes]]: Scopes[0]hasOwnProperty: ?? hasOwnProperty()isPrototypeOf: ?? isPrototypeOf()arguments: (...)caller: (...)length: 1name: "isPrototypeOf"[[Prototype]]: ?? ()apply: ?? apply()arguments: (...)caller: (...)length: 2name: "apply"[[Prototype]]: ?? ()[[Scopes]]: Scopes[0]arguments: (...)bind: ?? bind()call: ?? call()caller: (...)constructor: ?? Function()length: 0name: ""toString: ?? toString()Symbol(Symbol.hasInstance): ?? [Symbol.hasInstance]()get arguments: ?? ()set arguments: ?? ()get caller: ?? ()set caller: ?? ()[[FunctionLocation]]: ???[[Prototype]]: Objectconstructor: ?? Object()hasOwnProperty: ?? hasOwnProperty()isPrototypeOf: ?? isPrototypeOf()propertyIsEnumerable: ?? propertyIsEnumerable()toLocaleString: ?? toLocaleString()toString: ?? toString()valueOf: ?? valueOf()__defineGetter__: ?? __defineGetter__()__defineSetter__: ?? __defineSetter__()__lookupGetter__: ?? __lookupGetter__()__lookupSetter__: ?? __lookupSetter__()get __proto__: ?? __proto__()set __proto__: ?? __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]propertyIsEnumerable: ?? propertyIsEnumerable()toLocaleString: ?? toLocaleString()toString: ?? toString()valueOf: ?? valueOf()__defineGetter__: ?? __defineGetter__()__defineSetter__: ?? __defineSetter__()__lookupGetter__: ?? __lookupGetter__()__lookupSetter__: ?? __lookupSetter__()get __proto__: ?? __proto__()set __proto__: ?? __proto__()
// typeof Function.prototype
// "function"
// typeof Object.prototype
// "object"
// Function.__proto__
// ?? () { [native code] }
// function Car(){

// }
// undefined
// Car.__proto__ === Function.prototype
// true
// Car.constructor
// ?? Function() { [native code] }
// Object.constructor
// ?? Function() { [native code] }
// Object.prototype.constructor
// ?? Object() { [native code] }
// Object.constructor === Function.prototype
// false
// Function.__proto__
// ?? () { [native code] }
// Function.__proto__ === Object.__proto__
// true
// Object.prototype.__proto__
// null
// Object.prototype.__proto__ === Function.prototype
// false
// Object.prototype.__proto__ === Function.prototype.__proto__
// false
// Car.prototype
// {constructor: ??}constructor: ?? Car()arguments: nullcaller: nulllength: 0name: "Car"prototype: {constructor: ??}[[FunctionLocation]]: VM283:1[[Prototype]]: ?? ()apply: ?? apply()arguments: (...)bind: ?? bind()call: ?? call()caller: (...)constructor: ?? Function()length: 0name: ""toString: ?? toString()Symbol(Symbol.hasInstance): ?? [Symbol.hasInstance]()get arguments: ?? ()set arguments: ?? ()get caller: ?? ()set caller: ?? ()[[FunctionLocation]]: ???[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[1][[Prototype]]: Objectconstructor: ?? Object()hasOwnProperty: ?? hasOwnProperty()isPrototypeOf: ?? isPrototypeOf()propertyIsEnumerable: ?? propertyIsEnumerable()toLocaleString: ?? toLocaleString()toString: ?? toString()valueOf: ?? valueOf()__defineGetter__: ?? __defineGetter__()__defineSetter__: ?? __defineSetter__()__lookupGetter__: ?? __lookupGetter__()__lookupSetter__: ?? __lookupSetter__()get __proto__: ?? __proto__()set __proto__: ?? __proto__()
// Car.prototype.__proto__ === Object
// false
// Car.prototype.__proto__ === Object.prototype
// true
// Car
// ?? Car(){

// }
// Car.__proto__
// ?? () { [native code] }
// Car.__proto__ === Function.prototype
// true
// Car.constructor
// ?? Function() { [native code] }
// Car.constructor === Function
// true
// Function.constructor
// ?? Function() { [native code] }
// Function.constructor === Function
// true
// Function.prototype.constructor
// ?? Function() { [native code] }
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
// ?? Function() { [native code] }
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
// ?? () { [native code] }
// typeof Function.prototype
// "function"
// Function.prototype.__proto__ === Object.prototype
// true
// Object.getPrototypeOf(Function.prototype)
// {constructor: ??, __defineGetter__: ??, __defineSetter__: ??, hasOwnProperty: ??, __lookupGetter__: ??,?????}constructor: ?? Object()arguments: (...)assign: ?? assign()caller: (...)create: ?? create()defineProperties: ?? defineProperties()defineProperty: ?? defineProperty()entries: ?? entries()freeze: ?? freeze()fromEntries: ?? fromEntries()getOwnPropertyDescriptor: ?? getOwnPropertyDescriptor()getOwnPropertyDescriptors: ?? getOwnPropertyDescriptors()getOwnPropertyNames: ?? getOwnPropertyNames()getOwnPropertySymbols: ?? getOwnPropertySymbols()getPrototypeOf: ?? getPrototypeOf()is: ?? is()isExtensible: ?? isExtensible()isFrozen: ?? isFrozen()isSealed: ?? isSealed()keys: ?? keys()length: 1name: "Object"preventExtensions: ?? preventExtensions()prototype: {constructor: ??, __defineGetter__: ??, __defineSetter__: ??, hasOwnProperty: ??, __lookupGetter__: ??,?????}seal: ?? seal()setPrototypeOf: ?? setPrototypeOf()values: ?? values()[[Prototype]]: ?? ()apply: ?? apply()arguments: (...)bind: ?? bind()call: ?? call()caller: (...)constructor: ?? Function()length: 0name: ""toString: ?? toString()Symbol(Symbol.hasInstance): ?? [Symbol.hasInstance]()get arguments: ?? ()set arguments: ?? ()get caller: ?? ()set caller: ?? ()[[FunctionLocation]]: ???[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]hasOwnProperty: ?? hasOwnProperty()isPrototypeOf: ?? isPrototypeOf()arguments: (...)caller: (...)length: 1name: "isPrototypeOf"[[Prototype]]: ?? ()apply: ?? apply()arguments: (...)bind: ?? bind()call: ?? call()caller: (...)constructor: ?? Function()length: 0name: ""toString: ?? toString()Symbol(Symbol.hasInstance): ?? [Symbol.hasInstance]()get arguments: ?? ()set arguments: ?? ()get caller: ?? ()set caller: ?? ()[[FunctionLocation]]: ???[[Prototype]]: Objectconstructor: ?? Object()hasOwnProperty: ?? hasOwnProperty()isPrototypeOf: ?? isPrototypeOf()propertyIsEnumerable: ?? propertyIsEnumerable()toLocaleString: ?? toLocaleString()toString: ?? toString()valueOf: ?? valueOf()__defineGetter__: ?? __defineGetter__()__defineSetter__: ?? __defineSetter__()__lookupGetter__: ?? __lookupGetter__()__lookupSetter__: ?? __lookupSetter__()get __proto__: ?? __proto__()set __proto__: ?? __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]propertyIsEnumerable: ?? propertyIsEnumerable()toLocaleString: ?? toLocaleString()toString: ?? toString()valueOf: ?? valueOf()__defineGetter__: ?? __defineGetter__()__defineSetter__: ?? __defineSetter__()__lookupGetter__: ?? __lookupGetter__()__lookupSetter__: ?? __lookupSetter__()get __proto__: ?? __proto__()set __proto__: ?? __proto__()
// typeof Function.prototype
// "function"
// Car.__proto__ === Object.prototype
// false
// typeof Function.prototype.__proto__ === Object.prototype
// false
// Function.prototype.__proto__ === Object.prototype
// true
// Function.prototype.constructor
// ?? Function() { [native code] }
// Function.prototype.constructor === Function
// true
// Function.constructor
// ?? Function() { [native code] }
// Function.constructor === Function.prototype.constructor
// true
// Object.getPrototypeOf(car)
// VM2440:1 Uncaught ReferenceError: car is not defined
//     at <anonymous>:1:23
// (anonymous) @ VM2440:1
// Object.getPrototypeOf(Car)
// ?? () { [native code] }
// Object.getPrototypeOf(Car) === Function.prototype
// true
// Object.constructor
// ?? Function() { [native code] }
// Object.constructor === Function.prototype.constructor
// true
// Object.constructor === Object.prototype.constructor
// false