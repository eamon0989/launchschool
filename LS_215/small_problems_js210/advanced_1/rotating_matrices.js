/* 
1  5  8
4  7  2
3  9  6

=>

3  4  1
9  7  5
6  2  8

column number becomes row number
col number swaps to length - orig row num

r, c => r, c
0, 0 => 0, 2
0, 1 => 1, 2
0, 2 => 2, 2
1, 0 => 0, 1
1, 1 => 1, 1
1, 2 => 2, 1
2, 0 => 0, 0
2, 1 => 1, 0
2, 2 => 2, 0




-------

3  4  1
9  7  5

=> 

9  3
7  4
5  1

r, c => r, c
0, 0 => 0, 1
0, 1 => 1, 1
0, 2 => 2, 1
1, 0 => 0, 0
1, 1 => 1, 0
1, 2 => 2, 0



3 4
9 7 

9 3
7 4



Input: array of nested arrays
Output: arrays rotated by 90 degres

Requirements:
column number becomes row number 
col number swaps to length - orig row num
e.g. 3 col 3 rows => 0, 1 => 1, 2
do not mutate the original arrays

Edge Cases:
empty arrays
non array input

Algorithm:
  - initialize a new array
  - iterate through each row of the row
    - for each column, push a new array to the array (if i is 0)
    - push num at row,col to col, (array length - row) (to the end of the row)
  - continue until finished iterating
  - return the new array matric

*/
function rotate90(matrix) {
  let rotated = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    rotated.push([]);
  }

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[0].length; col += 1) {
    rotated[col][matrix.length - 1 - row] = matrix[row][col];
    }
  }

  return rotated;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]