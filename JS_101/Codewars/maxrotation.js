/*
Input: number
Output: rotated number

Rules:
Move the digit at index 0 to the end
then move the digit at index 1 to the end, etc
until end
Must return a number

Algorithm:
 - convert the number to a string
 - split the string into an array
 - iterate over the array, taking the digit at index to the end
 - repeat until you reach the end of the array
 - join back into a string and return as a number

735291
352917
329175
321759
321597
321579
*/

function maxRotation(number) {
  let array = [...String(number)];
  for (let index = 0; index < array.length; index += 1) {
    array.push(array.splice(index, 1));
  }

  return Number(array.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845