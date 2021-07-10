/*
In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're
going to reverse those functions.

Write a function that converts a non-negative integer value
(e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an
expression such as '' + number. Your function should do this the
old-fashioned way and construct the string by analyzing and manipulating
the number.

 - initialize an empty string variable
 - define a while loop
   - while num is greater than 1
     - num % 10
     - check if value is in obj, concat string with key value
     - divide num by 10 and round down
     - repeat
 - return the string

*/

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let string = '';

  if (num === 0) {
    string += DIGITS[num];
  }

  while (num >= 1) {
    let digit = num % 10;
    string = DIGITS[digit] + string;
    num = Math.floor(num / 10);
  }

  return string;
}

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    return `-${integerToString(-num)}`;
  } else if (Math.sign(num) === +1) {
    return `+${integerToString(num)}`;
  }

  return integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");