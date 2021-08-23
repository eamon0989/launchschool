// let obj = {};

// if (obj[prop]?.max) {
//   console.log(obj.max);;
// }

// let array = [1, 2, 3];

// let [a, b, c] = array;
// console.log(a, b, c);

// let foo = "hello";

// function foo() {
//   console.log("hello");
// }

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }
// foo();

// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// bar();

// function bar() {
//   console.log("foo!");
// };

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();

// var foo = 10;

// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// bar();
// bar();
// bar();

// console.log(foo());//3

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);//1
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');//2
//   }
// }

// let foo = ["bar", "qux"];

// function getFoo() {
//   return foo;
// }

// let newFoo = getFoo();
// console.log(newFoo, foo);

// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1());
// console.log(incrementCounter1());

// console.log(incrementCounter2());
// console.log(incrementCounter2());

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// let foo = (function() {
//   return (function() {
//     return 10;
//   })() + 5;
// })();

// console.log(foo);       // => 15

// console.log(((first, second) => first * second)(5, 6)); // => 30

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2)

// // let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

class DivideByZeroError extends Error {}

function div(first, second) {
  if (second === 0) {
    throw new DivideByZeroError("Divide by zero!");
  }

  return first / second;
}

function divideOneBy(divisor) {
  try {
    let result = div(1, divisor);
    console.log(result);
  } catch (error) {
    if (error instanceof DivideByZeroError) {
      console.log(Object.getOwnPropertyNames(error));
      console.log(error.stack);
      console.log(error.message);
      console.log(`${error.message} ignored`);
    } else {
      throw error;
    }
  }
}

divideOneBy(1); // 1
divideOneBy(0); // Divide by zero! ignored