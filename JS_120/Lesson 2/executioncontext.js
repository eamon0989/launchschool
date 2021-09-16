// let foo = {
//   bar: function() {
//     console.log(this);
//   }
// };

// let baz = foo.bar;
// baz(); // Object [global] {...}


// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42
// };

// logNum.call(obj); // logs 42

// function logNum() {
//   console.log(this.num);
// }

// let obj = {
//   num: 42
// };

// obj.logNum = logNum;
// obj.logNum(); // logs 42

// console.log(obj);


// someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//   a: 'abc',
//   b: 'def',
//   add: function() {
//     return this.a + this.b;
//   },
// };

// console.log(bar.add.call(foo));

// let object = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     return this.a + ' ' + this.b;
//   },
// };

// console.log(object.foo());

// let bar = object.foo;
// console.log(bar());                                // "undefined undefined"

// let baz = object.foo.bind(object);
// console.log(baz());                                // "hello world"

// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj)();

// // console.log(foo.bind(obj));
// // console.log(foo());
// // let bound = foo.bind(obj);
// // bound();
// foo.bind(obj)();

// console.log(undefined + undefined);

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };


// john.greetings();         // context is john
// let foo = john.greetings; // Strips context
// foo();                    // context is now the global object

// function repeatThreeTimes(func) {
//   func(); // can't use func.call(john); john is out of scope
//   func();
//   func();
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings.bind(john)); // Strips context
// }

// foo();

// // => hello, undefined undefined
// // => hello, undefined undefined
// // => hello, undefined undefined

// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john);
// }

// foo();

// // hello, John Doe
// // hello, John Doe
// // hello, John Doe

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let self = this;
//     function bar() {
//       console.log(self.a + ' ' + self.b);
//       console.log(self);
//     }

//     bar();
//   },
// };
// // a = 'this is a global property';
// // obj.foo();        // => undefined undefined
// obj.foo();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.call(this);
//   },
// };

// obj.foo();        // => undefined undefined

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.bind(this)();
//   },
// };

// obj.foo();        // => hello world

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this);

//     // some code
//     bar();

//     // some more code
//     bar();

//     // still more code
//   }
// };

// obj.foo();
// // => hello world
// // => hello world


// needs to be a function expression to use bind on the brackets 
// like this
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this);

//     bar();

//     bar();

//   }
// };

// obj.foo();        // => undefined undefined

// let obj = {
//   a: 5,

//   foo: () => {
//     console.log(this.a);
//   },

//   bar() {
//     console.log(this.a);
//   }
// };

// obj.foo(); // undefined
// obj.bar(); // 5

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//       console.log(this);
//     });
//   },
// };

// john.greetings();

// // => hello, undefined undefined
// // => hello, undefined undefined
// // => hello, undefined undefined

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     let self = this;
//     repeatThreeTimes(function() {
//       console.log('hello, ' + self.firstName + ' ' + self.lastName);
//     });
//   },
// };

// john.greetings();

// // => hello, undefined undefined
// // => hello, undefined undefined
// // => hello, undefined undefined

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     // let self = this;
//     return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func.bind(turk)();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// let boundGetDescription = turk.getDescription.bind(turk);

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(boundGetDescription);

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     console.log(this.titles);
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = function() {
//       this.a += 1;
//     }.bind(foo);

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo);

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo);

// let foo = {
//   a: 0,
//   incrementA: function() {
//     let increment = () => {
//       this.a += 1;
//     };

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo);

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(foo);
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo);

// let obj = {a: "a"};
// console.log(obj.__proto__);
// console.log(obj.hasOwnProperty("__proto__")); // false

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = {
//   bark() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   }
// };

// let maxi = new Dog('Maxi', 'German Shepherd', 32);

// console.log(maxi.hasOwnProperty('__proto__'));              // false
// console.log(Dog.hasOwnProperty('__proto__'));               // false
// console.log(Function.hasOwnProperty('__proto__'));          // false
// console.log(Object.hasOwnProperty('__proto__'));            // false
// console.log(Dog.prototype.hasOwnProperty('__proto__'));     // false
// console.log(Function.prototype.hasOwnProperty('__proto__'));// false
// console.log(Object.prototype.hasOwnProperty('__proto__'));  // true

// console.log(maxi.__proto__);  // returns the prototype object, the value
// // assigned to the hidden [[Prototype]] property on maxi

// Global object

// var i = 10;
// i = 21;
// console.log(Object.i);

// let foo = {
//   a: 2,
//   sum() {
//     return this.a + 1;
//   }
// };
// a = 1;
// let baz = foo.sum;
// console.log(baz());
// console.log(baz.call('foo'));

// let cat = {
//   name: 'Pudding',
//   colors: 'black and white',
//   identify() {
//     let report = function() {
//       console.log(`${this.name} is a ${this.colors} cat.`);
//     };
//     report();
//   },
// };

// cat.identify();
// // Expected output: Pudding is black and white.

// let logResult = function(func) {
//   let result = func();
//   console.log(result);
//   return result;
// };

// let foo = function() {
//   let sue = {
//     name: 'Sue Perkins',
//     age: 37,
//     myAge() {
//       return `${this.name} is ${this.age} years old.`;
//     },
//   };
//   logResult(sue.myAge);
// };

// foo();
// // Expected output: Sue Perkins is 37 years old.