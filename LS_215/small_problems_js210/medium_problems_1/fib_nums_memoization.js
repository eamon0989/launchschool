// let fibNums = [0, 1, 1];

// function fibonacci(nth) {
//   if (fibNums[nth]) return fibNums[nth];

//   fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
//   return fibonacci(nth);
// }

// let fibonacci = (function(){
//   let fibNums = [0, 1, 1];

//   return function privateFibonacci(nth, fibNums = [0, 1, 1]) {
//     if (fibNums[nth]) return fibNums[nth];
  
//     fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
//     return privateFibonacci(nth, fibNums);
//   }
// }())

// let fibonacci = (function(){
//   let computed = [0, 1, 1];

//   return function privateFibonacci(num) {
//     computed[num] = computed[num] || privateFibonacci(num - 1) + computed[num - 2];
//     return computed[num];
//   }
// }());

let fibonacci = (function() {
  let fibNums = [0, 1, 1];

  return function privateFibonacci(nth) {
    fibNums[nth] = fibNums[nth] || privateFibonacci(nth - 1) + fibNums[fibNums.length - 2];
  
    return fibNums[nth];
  }
}());

// let fibNums = [0, 1, 1];

// function fibonacci(nth) {
//   fibNums[nth] = fibNums[nth] || fibonacci(nth - 1) + fibNums[fibNums.length - 2];

//   return fibNums[nth];
// }

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
// console.log(fibonacci(75));      // 6765