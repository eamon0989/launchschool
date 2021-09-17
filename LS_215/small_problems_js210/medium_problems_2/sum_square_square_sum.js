/* 
Input: a positive int
Output: a positive int 

Requirements:
find all positive ints betweek 1 and n inclusive
  - sum them and square the result
square all the positive ints and sum the results
subtract the first from the second

Algorithm:
  - initialize an empty array
  - loop from 1 to n and push all the nums to the array
    - sum the ints and square the result
    - square all the ints and sum them
  - subtract the second value from the first and return it



*/



// function sumSquareDifference(num) {
//   let ints = [];
//   for (let i = 1; i <= num; i += 1) {
//     ints.push(i);
//   }

//   let sumSquare = Math.pow(ints.reduce((acc, num) => acc + num), 2);
//   let squareSum = ints.map(num => Math.pow(num, 2)).reduce((acc, num) => acc + num);

//   return sumSquare - squareSum;
// }

function sumSquareDifference(num) {
  let ints = [...Array(num + 1).keys()];
  
  let sumSquare = Math.pow(ints.reduce((acc, num) => acc + num), 2);
  let squareSum = ints.map(num => Math.pow(num, 2)).reduce((acc, num) => acc + num);

  return sumSquare - squareSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150