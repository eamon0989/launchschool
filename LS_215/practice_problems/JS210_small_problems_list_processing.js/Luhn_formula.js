/*

breakdown / understand
test cases / run through test cases manually
data structures
algorithm

Input: number
Output: true/false?

Rules:
from right to left, double the value of every second digit
1111 --> 2121

if a digit becomes 10 or more, subtract 9
8763 --> 7733

sum the digits 
2121 --> 6
7733 --> 20

if (sum % 10 === 0) --> valid
else --> not valid

3554 --> 6514 --> 16



Test cases and edge cases:

2323 2005 7766 3554 is valid
remove extra chars and spaces?

2323 2005 7766 355

Data structure:
Break the number into string digits in an array

Mental model:

Algorithm:
remove and non digits
iterate backwards

*/

function luhn(string) {
  if (typeof string !== 'string' || (!string)) return false;

  string = string.replace(/\D/g, '').split('');
  let count = 0;

  for (let i = string.length - 1; i >= 0; i -= 1) {
    if (count % 2 !== 0) {
      let num = string[i] * 2;
      if (num > 9) num -= 9;
      string[i] = num;
    }
    count += 1;
  }

  return string.map(Number).reduce((acc, num) => acc + num) % 10 === 0;
}

/* 
If number is valid, return the number
If not, add 0 to the end and check
If not, increment 0 to 1, then check
repeat up until 9




*/




function makeValidLuhn(string) {
  if (typeof string !== 'string' || (!string)) return false;

  if (luhn(string)) return string;
  string = string.replace(/\D/g, '');
  string += '0';

  while (!luhn(string)) {
    string = string.split('').map(Number);
    string[string.length - 1] += 1;
    string = string.map(String).join('');
  }

  return string;
}


// console.log(makeValidLuhn('2323 2005 7766 355')); // true
// console.log(luhn('2323 2005 7766 35')); // false
// console.log(luhn('2323 2005 7766 3554')); // true
// console.log(luhn('2323200577663554')); // true
// console.log(luhn('2323 2005 7766 3551')); // true
// console.log(luhn('2323 2005 7766 3554') === false); // true
// console.log(luhn('1111') === false); // false
// console.log(luhn('2323 2005 7766 3554') === false); // true
// console.log(luhn('2323 2005 $.*7766 3554') === false); // true
// console.log(luhn(2323200577663554) === false); // false
// console.log(luhn([]) === false); // false
// console.log(luhn("2323 2005 7766 3554") === true);  // ignore non-digit characters like spaces
// console.log(luhn('1111') === false)
// console.log(luhn('8763 ') === true); // handles subtracting 9 from digits doubled > 9
// console.log(luhn('8763') === true);
// console.log(luhn('.--8-7;6-3.. ')) //=== true);
// console.log(luhn('') === false); // input empty string
// console.log(luhn() === false); // no input string
// console.log(luhn('5') === false)  // input string is of size 1; no numbers get doubled checksum is 5; false
// console.log(luhn('0') === true)  // input string is of size 1; input number is a zero; checksum is 0
// console.log(luhn('00') === true)  // input string is of size 1; input number is a zero; checksum is 0
// console.log(luhn('000') === true)  // input string is of size 1; input number is a zero; checksum is 0
// console.log(luhn("-2-3-2-3-2-0-0-5 -7-7-6-6-3-5-5-4") === true)  // ignore negative signs; just grab digits
// console.log(luhn("-0.1110") === false)  // ignore negative signs, and decimal points when looking at number order; calculate front/ end  0's in number order
// console.log(luhn('3554') === false); // 6+5+1+4 ; sums to 15; not a checksum
// console.log(luhn('1115') === true) 
// console.log(luhn('00208') === true)
// // valid
// console.log(luhn('My credit card digits = 8763 is it ok?') === true); 

// // invalid
// console.log(luhn(8763) === false);
// console.log(luhn([]) === false);
// console.log(luhn({}) === false);

console.log(makeValidLuhn('2323 2005 7766 355') === '2323200577663554');
console.log(makeValidLuhn('2323 2005 7766 355') === '2323200577663554');
console.log(makeValidLuhn('876 ') ==='8763');
console.log(makeValidLuhn('.--8-7;6-.. ')=== '8763');
console.log(makeValidLuhn('000') === '000')  // if the input number is already valid; return that number?(yes- confirmed in video)
// console.log(makeValidLuhn('') === '0')  // if the number is an empty string; return '0'?(question for interviewer);
console.log(makeValidLuhn('111') ==='1115'); // input becomes the sum 6; output 1115 becomes; 2125 sum becomes 10
// console.log(makeValidLuhn() === '0'); // no input string; return the '0' string?(question for interviewer)
console.log(makeValidLuhn('8763') === '8763')  // if the input number is already valid; return that number?(yes-confirmed in video)
console.log(makeValidLuhn('000') === '000')  // if the input number is already valid; return that number?(yes-confirmed in video)
console.log(makeValidLuhn('00208') === '00208')  // if the input number is already valid and has a preceding zeros
console.log(makeValidLuhn('0020') === '00208')  // if the input number is not valid and has a preceding zeros