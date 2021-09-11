function sum(num) {
  return String(num).split('').map(Number).reduce((acc, num) => acc + num);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45