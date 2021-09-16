function sum(num) {
  return [...String(num)].map(Number).reduce((acc, ele) => acc + ele, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45