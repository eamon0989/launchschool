/* You are going to be given an array of integers. Your job is to take that
array and find an index N where the sum of the integers to the left of N is
equal to the sum of the integers to the right of N. If there is no index
that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the
array, the sum of left side of the index ({1,2,3}) and the sum of the right
side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array,
the sum of left side of the index ({1}) and the sum of the right side of the
index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this
  problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index
of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any
integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the
right of N. If you do not find an index that fits these rules, then you will
return -1.

Note:
If you are given an array with multiple answers, return the lowest correct
index.


Input: Array
Output: an index num

Rules:
Explict:
If there are multiple answers, return the lowest correct index
There are positive and negative numbers in the array
An 'empty' array === 0
At index 0, the left side is 0 (no numbers)
if there is no index that meets the requirements, return - 1

Implicit:
Start checking from index 0
Return the first correct option
The number at the current index is not summed

Edge cases:
No numbers?

{1,2,3,4,3,2,1}
Algorithm:

  - iterate over the array
  - split the array into 2 arrays, excluding the current index number
  - find the sum of both sides
  - check if they are equal
  - if so, return the current index number
  - otherwise, continue
  - if no index is returned, return - 1
*/

function findEvenIndex(array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex += 1) {
    let left = array.slice(0, currentIndex).reduce((acc, num) => acc + num, 0);
    let right = array.slice(currentIndex + 1)
      .reduce((acc, num) => acc + num, 0);
    if (left === right) {
      return currentIndex;
    }
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])); //,3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1])); //,1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6])); //,-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35])); //,3, "The array was: [20,10,30,10,10,15,35] \n");