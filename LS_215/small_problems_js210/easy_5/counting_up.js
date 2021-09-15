function sequence(num) {
  return Array(num).fill().map((_, index) => index + 1);
}
console.log(Array(5).fill());

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]