/*
Creat a function that takes a positive integer number
and returns the next bigger number formed by the same digits:

12 === 21
513 === 531
2017 === 2071

0127
0172
0271
0217


1234 === 1243
2071 === 2170
2781 === 2871
123456789 === 123456798
if no bigger number can be composed, return -1

9 === -1
111 === -1
531 === -1

Input: positive integers

Output: number

Rules:
output must have the same digits as input (unless -1)
output must be the next biggest possible number
if numbers digits are all descending from left to right, return -1
if all digits are the same, return -1
if there is only one digit, return -1

Mental model

Iterate up from num by 1, the next num that contains the same digits is the
  number

Algorithm:
  - create a helper function to check if current num has the same digits as num
    - if so return the number
  - start iterating up from num, pass each num to helper function
  - stop iterating when helper returns a number OR currentNum has more digits
      than num
  - when helper returns a num, return that number
*/

function nextBiggerNumber(num) {
  let currentNum = num + 1;
  let digitsLen = String(num).split('').length;
  let currentDigitsLen = String(currentNum).split('').length;

  while (!containsSameDigits(num, currentNum)) {
    if (currentDigitsLen !== digitsLen) return -1;

    currentNum += 1;
    currentDigitsLen = String(currentNum).split('').length;
  }

  return currentNum;
}

function containsSameDigits(num, currentNum) {
  let digits = String(num).split('').sort();
  let currentDigits = String(currentNum).split('').sort();

  for (let index = 0; index < digits.length; index += 1) {
    if (digits[index] !== currentDigits[index]) {
      return false;
    }
  }

  return true;
}

console.log(nextBiggerNumber(9));
console.log(nextBiggerNumber(12));
console.log(nextBiggerNumber(513));
console.log(nextBiggerNumber(2017));
console.log(nextBiggerNumber(111));
console.log(nextBiggerNumber(531));
console.log(nextBiggerNumber(123456789));
