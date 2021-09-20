/* 
Input: arrray of arrays
ouput: array with rows and columns swapped

Requirements:
swap the rows and columns of the nested arrays
don't mutate the array

1  5  8
4  7  2
3  9  6

becomes

1  4  3
5  7  9
8  2  6


1,1 stays 1,1
1,2 becomes 2,1
1,3 becomes 3,1
2,1 becomes 1,2
3,1 becomes 1,3
2,2 stays 2,2
3,3 stays 3,3

Algorithm:
  - create a new array with the same amount of rows
    - loop through the first column using a nested loop
        1, 1 - 1, 2 - 1, 3 - 2, 1 etc
        push each number to the row indicated by the column number in the loop
  - return the array
*/

function transpose(array) {
  let result = [];

  for (let col = 0; col < array.length; col += 1) {
    result.push([]);
    for (let row = 0; row < array[0].length; row += 1) {
      result[col].push(array[row][col]);
    }
  }

  return result;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]