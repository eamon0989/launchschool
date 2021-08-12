/* Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in
list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed
from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Input: 2 arrays
Output: 1 array

Rules:
If a number appears in the second array, remove all istances
from the first array
return 1st array

Algorithm:
  - Iterate through the first array, if num appears in the second
      array, remove it from the first
  - Return the first array

*/
function arrayDiff(array1, array2) {
  return array1.filter(num => !array2.includes(num));
}

console.log(arrayDiff([1,2],[1])); // == [2]
console.log(arrayDiff([1,2,2,2,3],[2])); // == [1,3]