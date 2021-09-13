/* 
Problem Description
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

Input: a string 
Output: good number or 10 0's (as a string)

Rules:
string < 10 digits - bad
string === 10 digits - good
string 11 digits, first is 1, remove the 1
string 11 digits, first not 1 - bad
more than 11 digits - bad
special chars can be ignored (possibly removed?)

123456789 - bad
1234567890 - good
11234567890 - good
21234567890 - bad
12345-678 90 - good
123 - bad
1234567890123 - bad

Mental model:

Tests and Edge cases:
input is an array?
input is an object?
input contains special chars such as NaN, infinity etc
input contains punctuation ( -.()) - ignore, only focus on digits
input contains chars? possibly remove?


Algorithm:
  - check if the input is an array or an object, return 10 0's
  - check if input contains special chars, return 10 0's
  - remove punctuation?
  - if length === 10 and it's a number, return the number as a string
  - if length === 11 and it's a number -
    - if the first number is 1, remove it and return the number as a string
    - otherwise return 10'0s

*/  

function cleanNumber(string) {
  let defaultNum = '0000000000';
  if (typeof string !== 'string') return defaultNum

  string = string.replace(/\D/gi, '');
  if (string.match(/^1?(\d{10}$)/)) return string.slice(-10);
  return defaultNum;
}

function cleanNumber(string) {
  let defaultNum = '0000000000';
  if (typeof string !== 'string') return defaultNum

  string = string.replace(/\D/gi, '');

  if (string.length === 10) {
    return string;
  } else if (string.length === 11) {
    if (string[0] === '1') {
      return string.slice(1);
    }
  }

  return defaultNum;
}


console.log(cleanNumber('123456789')); // - bad
console.log(cleanNumber([])); // - bad
console.log(cleanNumber({})); // - bad
console.log(cleanNumber('')); // - bad
console.log(cleanNumber(1234567890)); // - bad
console.log(cleanNumber('123456789')); // - bad
console.log(cleanNumber('1234567890')); // - good
console.log(cleanNumber('11234567890')); // - good
console.log(cleanNumber('21234567890')); // - bad
console.log(cleanNumber('12345-678 90')); // - good
console.log(cleanNumber('123')); // - bad
console.log(cleanNumber('1234567890123')); // - bad