function persistence(num, count = 0) {
  if ([...String(num)].length === 1) {
    return count;
  }
  return persistence([...String(num)].map(Number).reduce((acc, num) => acc * num), count + 1);
}

console.log(persistence(39)); // 3
console.log(persistence(4));  // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4