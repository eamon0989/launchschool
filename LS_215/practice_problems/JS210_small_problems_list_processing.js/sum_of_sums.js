/*
Input: array
Output: number

Rules: 

Algorithm:
Iterate over the array, adding the sum of the previous numbers to an acc
return number
*/

function sumOfSums(array) {
  return array.reduce((acc, _, index, array) => {
    acc += array.slice(0, index + 1).reduce((acc, num) => acc + num);
    return acc;
  })
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35