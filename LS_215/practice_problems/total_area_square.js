/*
Input: nested arrays
Output: integer

Rules:
find the product of each nested array, add them together

Algorithm:


*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(array) {
  return array.map(arr => arr[0] * arr[1]).reduce((acc, num) => acc + num);
}

function totalSquareArea(array) {
  return array.filter(arr => arr[0] === arr[1]).map(arr => arr[0] * arr[1]).reduce((acc, num) => acc + num);
}

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121