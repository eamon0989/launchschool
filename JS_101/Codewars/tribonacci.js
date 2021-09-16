/* Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci,
but summing the last 3 (instead of 2) numbers of the sequence to generate
the next. And, worse part of it, regrettably I won't get to hear non-native
Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting
input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1]
instead of [1, 1] basically shifts the common Fibonacci sequence by once
place, you may be tempted to think that we would get the same sequence
shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a
fibonacci function that given a signature array/list, returns the first n
elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number;
if n == 0, then return an empty array (except in C return NULL) and be ready
for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be
found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes
  that I really recommend to any math enthusiast and for showing me this
  mathematical curiosity too with his usual contagious passion :)]

  Input: Array with 3 nums
  Output: array with num numbers

  Rules:
  Add the last 3 numbers in the array
  given num, return an array with num number of numbers,
  each number being the sum of the 3 previous numbers
  if num is 0, return an empty array

  Implicit:
  Each num will always be greater than the last

  While there are less than num elemements, sum the previous 3
  numbers and add the sum to the end of the array

  Algorithm;
  - create a loop that runs until the length of the array is equal to num
  - inside the loop, sum the last 3 numbers and append them to the array
  - return the array when it reaches num length
  */

function tribonacci(array, num) {
  if (num === 0) return [];

  while (array.length < num) {
    array.push(array[array.length - 1] + array[array.length - 2] +
      array[array.length - 3]);
  }

  if (num > array.length) {
    return array.slice(0, num + 1);
  }

  return array;
}

console.log(tribonacci([1,1,1],10)); //[1,1,1,3,5,9,17,31,57,105]);
console.log(tribonacci([0,0,1],10)); //0,0,1,1,2,4,7,13,24,44]);
console.log(tribonacci([0,1,1],10)); //,[0,1,1,2,4,7,13,24,44,81]);
console.log(tribonacci([1,0,0],10)); //,[1,0,0,1,1,2,4,7,13,24])
console.log(tribonacci([0,0,0],10)); //,[0,0,0,0,0,0,0,0,0,0]);
console.log(tribonacci([1,2,3],10)); //,[1,2,3,6,11,20,37,68,125,230])
console.log(tribonacci([3,2,1],10)); //,[3,2,1,6,9,16,31,56,103,190]))