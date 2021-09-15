function showMultiplicativeAverage(array) {
  let reduced = array.reduce((acc, num) => acc * num) / array.length;
  return `${reduced.toFixed(3)}`;
}

// function showMultiplicativeAverage(array) {
//   return `${(array.reduce((acc, num) => acc * num) / array.length).toFixed(3)}`;
// }

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"