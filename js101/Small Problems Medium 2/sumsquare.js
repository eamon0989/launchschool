/* Write a function that computes the difference between the square of the sum
of the first count positive integers and the sum of the squares of the first
count positive integers.

Input: num
Output: num

Rules:
find all the numbers between 1 and n, add them and square the sum
find all numbers between 1 and n, square each num, add them
subtract the sum of the second from the first
return the answer
only count positive ints

Algorithm:


*/

function sumSquareDifference(num) {
  let squareOfSum = [...Array(num)].map((_, index) => index + 1)
    .reduce((acc, num) => acc + num, 0) ** 2;
  let sumOfSquares = [...Array(num)].map((_, index) => index + 1)
    .map(num => num ** 2).reduce((acc, num) => acc + num, 0);
  return squareOfSum - sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150