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

// bar();              // logs undefined
// var foo = 'hello';

// function bar() {
//   console.log(foo);
// }

// let foo = "hello";

// function foo() { // SyntaxError: Identifier 'foo' has already been declared
//   console.log("hello");
// }

// function foo() {
//   console.log("hello");
// }

// let foo = "hello"; // SyntaxError: Identifier 'foo' has already been declared

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

// function foo() {
//   var bar;
//   bar = bar - 42;
//   console.log(bar); // NaN
// }

// var bar;
// bar = 82;

// foo();

// foo(); //"Hello"

// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }


// foo(); //"Bye"
console.log(foo);
// foo(); //"Hello"

var foo = function() {
  console.log("Bye");
};

// function foo() {
//   console.log("Hello");
// }


foo(); //"Bye"
