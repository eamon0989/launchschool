const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const matrix2 = [
  [1, 5, 8, 7],
  [4, 7, 2, 0],
  [3, 9, 6, 9],
  [2, 4, 5, 8]
];

const transpose = arr => {
  for (let column = 0; column < arr.length; column += 1) {
    for (let row = 0; row < arr.length; row += 1) {
      arr[column].push(arr[row].shift());
      console.log(arr);
    }
  }
  return arr;
};

//// transpose in place
// let transpose = function(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = i; j < array.length; j += 1) {
//       // console.log([array[i][j], array[j][i]]);
//       [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
//     }
//   }

//   return array;
// };

let newMatrix = transpose(matrix);
// let newMatrix2 = transpose(matrix2);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
// console.log(newMatrix2);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix2);


// function transpose(array) {
//   let copy = [];
//   for (let column = 0; column < array.length; column += 1) {
//     copy.push([]);
//     for (let row = 0; row < array[0].length; row += 1) {
//       copy[column][row] = array[row][column];
//     }
//   }

//   return copy;
// }

// function transpose(array) {
//   return array.map((_, column) => {
//     return array.map((_, row) => {
//       return array[row][column];
//     });
//   });
// }

