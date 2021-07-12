/* Problem Description
Given a divisor and a bound, find the largest number N such that:
N is divisible by the divisor
N is less than or equal to the bound
N is greater than 0.

Test Cases

INPUT: 2 numbers
OUTPUT: a single number

RULES

n must be greater than 0
n must be divisible by first num
n must be less than or equal to the second number

ALGORITHM

 - find all multiples of the first num
     e.g. 2, 4, 6 up to the second num and store them in an array
- return the last number in the array as it is the last
    multiple of of the divisor andit's less than or equal to
    the bound

*/

function maxMultiple(divisor, bound) {
  let multiples = [];
  for (let multiple = divisor; multiple <= bound; multiple += divisor) {
    multiples.push(multiple);
  }

  return multiples[multiples.length - 1];
}

console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);