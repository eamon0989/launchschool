
// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// var foo = 10;


// bar();
// bar();
// bar();

// funky(); // 2nd funky

// function funky() {
//   console.log('1st funky');
// }

// function funky() {
//   console.log(`2nd funky`);
// }


// return function() {
//   console.log(1 + 1);
// }();

// return (function() {
//   return left + right;
// }());

// if (true) {
//   var bar = 1;
//   function foo() {
//     console.log(`inner`);
//   }
// }

// console.log(bar);
// foo();

// let foo = 1;
// let bar = 2;

// let obj = {
//     foo,
//     bar,
// } 

// console.log(obj); // { foo: 1, bar: 2 }

// let obj = {
//   foo() {},

//   bar: function() {},
// }

let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

let { foo: otherFoo, qux, bar } = obj;

console.log(otherFoo, bar, qux);