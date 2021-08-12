/* Given an array of integers numbers that is already sorted in non-decreasing
order, find two numbers such that they add up to a specific target number.

Return the indices of the two numbers (1-indexed) as an integer array answer of
size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

The tests are generated such that there is exactly one solution. You may not
use the same element twice.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.

Input: sorted ascending array of numbers
Output: array with 2 numbers representing the indices

Rules:
You may not use the same element twice
Return an array containing the 2 indices of the elements that
sum up to num
Return index + 1


Algorithm:
*/

// var twoSum = function(array, target) {
//   for (let i = 0; i < array.length - 1; i += 1) {
//     for (let j = i + 1; j < array.length; j += 1) {
//       if (array[i] + array[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// };

var twoSum = function(array, target) {
  let obj = {};
  for (let index = 0; index < array.length; index += 1) {
    let currentNum = array[index];
    let numToFind = target - currentNum;
    let index2 = obj[numToFind];
    if (index2 !== undefined && index2 !== index) {
      return [index2 + 1, index + 1];
    }
    obj[currentNum] = index;
  }
};


// var twoSum = function(numbers, target) {
//   let pointer1 = 0;
//   let pointer2 = numbers.length - 1;

//   while (pointer1 < pointer2) {
//     if (numbers[pointer1] + numbers[pointer2] === target) {
//       return [pointer1 + 1, pointer2 + 1];
//     } else if (numbers[pointer1] + numbers[pointer2] < target) {
//       pointer1 += 1;
//     } else if (numbers[pointer1] + numbers[pointer2] > target) {
//       pointer2 -= 1;
//     }
//   }
// };

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));
console.log(twoSum([0,0,3,4], 0));
