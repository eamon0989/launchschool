/* A featured number (something unique to this exercise) is an odd number that
is a multiple of 7, with all of its digits occurring exactly once each. For
example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it
  is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is no
next featured number.

NOTE: The largest possible featured number is 9876543201.

Input: number
Output: number

Rules:
num must be odd
num must be a multiple of 7
each of it's digits must only appear once

Algorithm:
 - starting from the input num, increment up by 7
   - check if odd
   - if odd, check if all digits are unique
   - if all are unique, return num
   - otherwise continue incrementing
 - if num is equal to or greater than largest, return error


 - check if unique
 - split digits to a string
 - count occurences of each digit
 - if one appears more than once, return false
*/

function featured(num) {
  num += (7 - (num % 7));

  if (num % 2 === 0) {
    num += 7;
  }

  while (num <= 9876543201) {

    if (num % 2 === 1 && num % 7 === 0) {
      if (areDigitsUnique(num)) {
        return num;
      }
    }

    num += 14;
  }

  return `The required num does not exist`;
}

function areDigitsUnique(num) {

  let digits = [...String(num)].reduce((obj, digit) => {
    if (obj.hasOwnProperty(digit)) {
      obj[digit] += 1;
    } else {
      obj[digit] = 1;
    }

    return obj;
  }, {});

  return Object.values(digits).every(num => num === 1);
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."