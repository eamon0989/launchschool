function transpose(array) {
  let result = [];

  for (let col = 0; col < array[0].length; col += 1) {
    result.push([]);
    for (let row = 0; row < array.length; row += 1) {
      result[col].push(array[row][col]);
    }
  }

  return result;
}


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/* 




*/