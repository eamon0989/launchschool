

function fibonacci(nth) {
  let fibNums = [0, 1, 1];

  for (let i = 2; i < nth; i += 1) {
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  }
  
  return fibNums[nth];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050