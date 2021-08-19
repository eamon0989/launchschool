"use strict";

// function bind(obj, func) {
//   return function() {
//     return func.call(obj);
//   };
// }


// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// console.log(`boundFunc:`, boundFunc);
// boundFunc();
// console.log(obj); // { foo: 'bar' }

/*
bind is invoked, obj and function are passed in as arguments
boundFunc is initialized to the return value of bind which is
an anonymous functionthat returns func.call(obj)

*/

// function bind(obj, func) {
//   return function() {
//     return func.call(obj);
//   };
// }

// function bind(obj, func) {
//   return function() {
//     return func.call(obj);
//   };
// }

// let obj = {};

// let bound = bind(obj, function() {
//   this.foo = "bar";
// });

// bound();
// // func.call(obj);

// // console.log(`boundFunc:`, boundFunc);
// // boundFunc();
// console.log(obj); // { foo: 'bar' }


// function makeMultipleLister(num) {
//   return function() {
//     let max = 100;
//     for (let index = num; index < max; index += num) {
//       console.log(index);
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// let total = 0;

// function add(num) {
//   total += num;
//   console.log(total);
// }

// function subtract(num) {
//   total -= num;
//   console.log(total);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// let bar = foo(2); 
// let result = bar(3); // 6
// result += bar(4); // 30 = 6 + 24 (prod 24)
// result += bar(5); // 150 = 30 + 120 (24 * 5)
// console.log(result); // 150

// function later(func, argument) {
//   return function() {
//     return func(argument);
//   };
// }

// function later(func, argument) {
//   return () => func(argument);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(func, arg1) {
//   return function(arg2) {
//     return func(arg1, arg2);
//   };
// }

// function later2(func, arg1) {
//   return (arg2) => func(arg1, arg2);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// function makeCounter() {
//   var count = 0;       // declare a new variable
//   return function() {
//     count += 1;        // references count from the outer scope
//     console.log(count);
//   };


// }

// makeCounter();
// let count = makeCounter();
// count();
// count();
// count();

// function makeCounterLogger(min) {
//   return function(max) {
//     if (min < max) {
//       for (let i = min; i <= max; i += 1) {
//         console.log(i);
//       }
//     } else {
//       for (let i = min; i >= max; i -= 1) {
//         console.log(i);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8

// countlog(2);
// // 5
// // 4
// // 3
// // 2

// function makeList() {
//   let list = [];
//   return function(item) {
//     // console.log(item);
//     if (!item) {
//       if (list.length === 0) {
//         console.log(`The list is empty`);
//       } else {
//         list.forEach(item => console.log(item));
//       }
//     } else if (item && list.includes(item)) {
//       list.splice(list.indexOf(item), 1);
//       console.log(`${item} removed`);
//     } else if (!list.includes(item)) {
//       list.push(item);
//       console.log(`${item} added`);
//     }
//   };
// }

// let list = makeList();
// list();

// list("make breakfast");
// // make breakfast added!

// list("read book");
// // read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // make breakfast removed!

// list();
// // read book

// function makeList() {
//   let toDoList = [];

//   return {
//     add(item) {
//       toDoList.push(item);
//       console.log(`${item} added`);
//     },

//     list() {
//       if (toDoList.length === 0) {
//         console.log(`The toDoList is empty`);
//       } else {
//         toDoList.forEach(item => console.log(item));
//       }
//     },

//     remove(item) {
//       toDoList.splice(toDoList.indexOf(item), 1);
//       console.log(`${item} removed`);
//     }
//   };
// }

// let list = makeList();
// list.add("peas");
// // peas added!

// list.list();
// // peas

// list.add("corn");
// // corn added!

// list.list();
// // peas
// // corn

// list.remove("peas");
// // peas removed!

// list.list();
// // corn

// console.log(list.toDoList);

// list.hi = 'hello';
// console.log(list.toDoList);

// (function() {
//   console.log('hello');
// })();                     // => hello

// thousands of lines of messy JavaScript code!

// console.log((function() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// })()); // 24

// let variable = (function(num) {
//   return () => num;
// })(1);

// console.log(variable());

// // more messy JavaScript code

// const makeUniqueId = (function outer() {
//   let count = 0;
//   return function inner() {
//     ++count;
//     return count;
//   };
// })();

// console.log(makeUniqueId); // [Function: inner]
// makeUniqueId(); // => 1
// makeUniqueId(); // => 2
// makeUniqueId(); // => 3

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }());

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);
// console.log(sum);
// //  sum();  // ?

// (function subtract(num) {
//   if (num <= 0) {
//     console.log(num);
//     return num;
//   }

//   console.log(num);
//   return subtract(num - 1);
// })(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo()

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// let obj = {
//   foo: "foo",
//   bar: "bar",
//   qux: 42,
// };

// let { foo, bar, qux } = obj;

// console.log(foo, bar, qux); // foo bar 42

// let obj = {
//   foo: "foo",
//   bar: "bar",
//   qux: 42,
// };

// let foo = obj.foo;
// let bar = obj.bar;
// let qux = obj.qux;

// console.log(foo, bar, qux); // foo bar 42

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// console.log(foo(1, 2, 3));

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// foo()

