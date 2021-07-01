/*
Write a function called persistence that takes a single argument, a positive number.  The function should return the number argument's multiplicative persistence, which is the number of times you must multiply the digits in the number until the product is a single digit.

Example:

persistence(39) returns 3, because
3 * 9 = 27
2 * 7 = 14
1 * 4 = 4

persistence(4) returns 0 because 4 is already a one-digit number
*/

function persistence(num) {
  let str = String(num).split('');
  let count = 0;
  while (str.length > 1) {
    str = str.map((ele => Number(ele)).reduce => acc * ele, 1);
    // str = String(str[0] * str[1]).split('');
    console.log(str);
    count += 1;
  }
  // console.log(str);
  return count;
}

//Test Cases
console.log(persistence(39)); // 3
console.log(persistence(4));  // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4


/*
Problem Description
Given the string of chars alphabetic characters limited to a-z, do as in the sample cases.
Each character in the string argument should appear in the returned string.
The original character should be repeated as many times as its original position in the string argument.  (index 0 being position 1, index 1 being position 2...)
The repeated sequences of a character should be separated by a hyphen in the returned string.
In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

Test Cases
*/

accum("abcd")    // "A-Bb-Ccc-Dddd"
accum("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    // "C-Ww-Aaa-Tttt"