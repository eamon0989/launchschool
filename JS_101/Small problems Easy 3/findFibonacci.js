/*
Fibonacci Number Location By Length
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

*/
/* 
Problem: in my own words, write a short description of what the problem is about

input: number

output: number

rules: list anything specific that the problem is asking for 
or any edge cases to look out for


Examples: list some provided examples


rules:


Data structures

input types:: 
expected output types: 
intermediary: 


Algorithm: write down your pseudo code
Try listing different possible solution options to the problem first 
in plain English


fibonnacci function

while (true)
array [1, 1]
index 2 index 1 + 2
index 3 index 2 + 3
loop current index = (value of index - 1) + (value of index - 2)

while number of digits in current index < num continue
break/ return false if num of digits === num

function convertToString return false if string length isn't equal to num
convert current num to a string
check string.length
continue until string.length === current num

return index of array number + 1


*/

function findFibonacciIndexByLength(num) {
  let fibNums = [1n, 1n];
  let fibIndex1 = 0n;
  let fibIndex2 = 1n;
  let currentIndex = 2n;
  let breakVariable;

  while (breakVariable !== false) {
    fibNums[currentIndex] = BigInt(fibNums[fibIndex1]) + BigInt(fibNums[fibIndex2]);
    breakVariable = currentNumEqualsIndex(fibNums[currentIndex], num);

    fibIndex1 += 1n;
    fibIndex2 += 1n;
    currentIndex += 1n;
  }
  
  return currentIndex;
}


function currentNumEqualsIndex(currentNum, digitsNum) {
  let string = String(currentNum);

  if (BigInt(string.length) === digitsNum) {
    return false;
  }
  
  return true;
}



console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.