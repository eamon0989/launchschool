// F(nth) = F(n - 1) + F(n - 2)
// let computed = [];

// faster
// let computed = [0, 1, 1];

// function fibonacci(num) {
//   computed[num] = computed[num] || fibonacci(num - 1) + computed[num - 2];
//   return computed[num];
// }

let computed = [0, 1, 1];

function fibonacci(nth) {
  computed[nth] = computed[nth] || fibonacci(nth - 1) + computed[nth - 2];
  return computed[nth];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

