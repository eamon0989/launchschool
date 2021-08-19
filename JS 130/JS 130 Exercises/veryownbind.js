// function myBind(func, context) {
//   let array = [].slice.call(arguments, 2);

//   return function() {
//     let otherArgs = [].slice.call(arguments);
//     let newArr = [ ...array, ...otherArgs ];
//     return func.call(context, ...newArr);
//   };
// }

// function myBind(funcToBind, context) {
//   let partialArgs = Object.values(arguments).slice(2);
//   return function() {
//     return funcToBind
//       .apply(context, partialArgs.concat(Object.values(arguments)));
//   };
// }

// function myBind(func, context, ...args) {
//   return function() {
//     return func.apply(context, [...args, ...arguments]);
//   };
// }

function myBind(func, context, ...initialArgs) {
  return (...remainingArgs) => {
    return func.call(context,...initialArgs,...remainingArgs);
  };
}

function addNumbers(a, b) {
  console.log(arguments);
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15

