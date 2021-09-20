/* <!-- Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements. -->

Input: array
Output: array with 0's at the end

individual 0's?
Or elements that contain 0's?
0 ints or strings?
floats?
does zero count?
0's in nested arrays?

*/


array = [0, 1, 2, 0, 3, 4, 0];
array2 = ['0', 1, '2', 0, 'test', 3, 4, 0];
array3 = ['0', 1, 0, '2', [0, 1], 'test', 3, {}, 4, 0];


console.log(array3.filter(num => num !== 0));


function zerosToEnd(array) {
  let filtered = array.filter(num => num !== 0);
  let zeros = array.length - filtered.length;
  filtered.push(...Array(zeros).fill(0));
  return filtered;
}

console.log(zerosToEnd(array));

if (validTypes.includes(item?.[material.toLowerCase()])) {
  let index = validTypes
}