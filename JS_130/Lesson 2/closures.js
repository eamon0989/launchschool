// function foo() {
//   let name = "Pete";
//   return function() {
//     console.log(name);
//   };
// }

// foo(); // ???

// 
// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // 1
// console.log(incrementCounter1()); // 2
// console.log(incrementCounter1()); // 3

// console.log(incrementCounter2()); // 1
// console.log(incrementCounter2()); // 2

// console.log(incrementCounter1()); // 4

// function makeCounter() {
//   let counter = 0;

//   const fun1 = function() {
//     counter += 1;
//     return counter;
//   }

//   const fun2 = function() {
//     counter += 2;
//     return counter;
//   }

//   return [fun1, fun2];
// }

// let funs = makeCounter();
// console.log(funs[0]()); // 1
// console.log(funs[1]()); // 3


// function add(first, second) {
//   return first + second;
// }

// function makeAdder(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// console.log(addFive(3));  // 8
// console.log(addFive(55)); // 60
// console.log(addTen(3));   // 13
// console.log(addTen(55));  // 65


// function download(locationOfFile, errorHandler) {
//   // try to download the file
//   if (true) {
//     console.log(`it works`);
//   }
// }

// function errorDetected(url, reason) {
//   // handle the error
// }

// // download("https://example.com/foo.txt", /* ??? */);

// function makeErrorHandlerFor(locationOfFile) {
//   return function(reason) {
//     errorDetected(locationOfFile, reason);
//   };
// }

// let url = "https://example.com/foo.txt";
// download(url, makeErrorHandlerFor(url));

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2


function makeCounter() {
  let counter = 0;


  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter();
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4