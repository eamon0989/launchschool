// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3)

// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// console.log(baz, qux, bar);
// let { baz, qux, bar } = obj;

// function foo(array) {
//   return [
//     array[0],
//     5,
//     array[2],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// console.log(result);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// console.log(bar, qux, baz);

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);
// console.log(result);

// function product() {
//   let numbers = Array.from(arguments);
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result);

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return { animalType, age, colors };
// }

// console.log(qux());
// let { animalType: type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// Write a function that takes 5 string arguments, and returns an object with 3 properties:

// first: the first argument
// last: the last argument
// middle: the middle 3 arguments as a sorted array
// After writing the function, write some code to call the function. 
// The arguments you provide should come from an array. 
// You should create local variables named first, last, and middle from the return value.

// Use shorthand syntax wherever you can.

function retObj(first, two, three, four, last) {
  return {
    first,
    last,
    middle: [two, three, four].sort(),
  };
}

let array = ['a', 'b', 'c', 'd', 'e'];
let { first, last, middle } = retObj(...array);
console.log(first, last, middle);