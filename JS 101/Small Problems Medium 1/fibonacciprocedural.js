// F(nth) = F(n - 1) + F(n - 2)

function fibonacci(num) {
  let fiboNums = [1, 1];
  for (let index = 2; index < num; index += 1) {
    fiboNums[index] = fiboNums[index - 1] + fiboNums[index - 2];
  }

  return fiboNums[fiboNums.length - 1];
}

// function fibonacci(num) {
//   let fiboNums = [1, 1];
//   for (let index = 2; index < num; index += 1) {
//     fiboNums = [fiboNums[1], fiboNums[0] + fiboNums[1]];
//   }

//   return fiboNums[1];
// }


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050