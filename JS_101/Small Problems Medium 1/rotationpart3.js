/*

Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits to get
329175. Keep the first two digits fixed in place and rotate again to get 321759.
Keep the first three digits fixed in place and rotate again to get 321597.
Finally, keep the first four digits fixed in place and rotate the final two
digits to get 321579. The resulting number is called the maximum rotation of
the original number.

Write a function that takes an integer as an argument and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.

Examples:

input: number
output: max rotated number

rules:
rotate the first number to the end
now leave the first number and rotate the next number to the end
now leave the first 2 numbers and rotate the next number to the end
repeat until you move the second last number to the end


735291 352917
3 52917 => 3 29175
32 9175 => 32 1759
321 759 => 321 597
3215 97 => 3215 79


algorithm:

 - coerce the numbers to an array of digits
 - loop over the array, taking the digit from the current
     index and appending it to the end of the array
 - join the array and return the result as a number

*/
// function rotateRightmostDigits(string) {
//   let array = [...string];
//   let digit = array.splice(0, 1);
//   return [...array, digit].flat().join('');
// }

// function maxRotation(numbers) {
//   // let newString = '';
//   let numStr = String(numbers);
//   for (let i = 0; i < numStr.length; i += 1) {
//     numStr = numStr.slice(0, i) + rotateRightmostDigits(numStr.slice(i));
//   }

//   console.log(Number(numStr));
// }

// function rotateRightmostDigits(numbers, count) {
//   let array = [...String(numbers)];
//   let digit = array.splice((array.length - count), 1);
//   return Number([...array, digit].join(''));
// }

// function maxRotation(numbers) {
//   let numStr = String(numbers);
//   let count = numStr.length;
//   while (count >= 2) {
//     numStr = numStr.slice(0, numStr.length - count) + rotateRightmostDigits(numStr.slice(numStr.length - count));
//     count -= 1;
//   }

//   return Number(numStr);
// }

// function maxRotation(number) {
//   let numberDigits = String(number).length;
//   for (let count = numberDigits; count >= 2; count--) {
//     number = rotateRightmostDigits(number, count);
//     console.log(number);
//   }
//   return number;
// }

// /*
// 1. SET array variable to an array version of the input number
// 2. SET idx variable to 0
// 3. WHILE idx is less than the length of the array minus 1
//   - SET array variable to itself without element at idx
//   - SET digit variable to removed element
//   - SET array variable with digit pushed to back
//   - SET idx to idx plus 1
// 4. SET array variable to string version and then number version of itself
// 5. RETURN (number version of) array variable.
// */

// function maxRotation(numberParam) {
//   let array = String(numberParam).split('');

//   for (let idx = 0; idx < array['length'] - 1; idx += 1) {
//     let digit = array.splice(idx, 1);
//     array.push(digit[0]);
//   }

//   return Number(array.join(''));
// }

function maxRotation(numbers) {
  let array = [...String(numbers)];
  for (let i = 0; i < array.length - 1; i += 1) {
    array.push(array.splice(i, 1));
  }

  return Number(array.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845