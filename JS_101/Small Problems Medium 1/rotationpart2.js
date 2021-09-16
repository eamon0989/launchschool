/*

Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you want to
rotate to the end and shift the remaining digits to the left.

Examples:

input: numbers, number
output: numbers with one digit moved to the end

rules: take the digit indicated and move it to the end

algorithim:

 - coerce the numbers to a string
 - split the string in to an array
 - count backwards n number of times
 - take that digit and append it to the end
 - join the string back together and return it

*/

// function rotateRightmostDigits(numbers, count) {
//   let array = [...String(numbers)];
//   let digit = array.splice((array.length - count), 1);
//   array.push(digit);
//   return Number(array.join(''));
// }


// function rotateRightmostDigits(numbers, count) {
//   let numString = String(numbers);
//   let firstPart = numString.slice(0, numString.length - count);
//   let secondPart = numString.slice(numString.length - count);
//   return firstPart + secondPart.slice(1) + secondPart.slice(0, 1);
// }

function rotateRightmostDigits(numbers, count) {
  let array = [...String(numbers)];
  let digit = array.splice((array.length - count), 1);
  return [...array, digit].join('');
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// time 12 min