/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing
order, and two integers m and n, representing the number of elements in
nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead
be stored inside the array nums1. To accommodate this, nums1 has a length of
m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length
of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming
from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0
is only there to ensure the merge result can fit in nums1.


Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109


Input: 2 arrays, 2 numbers m and n representing length of arrays
Output: array1 with num elements sorted

Rules:
place the elements from the second array in the first
array 1 must be sorted
array1 return length must be m + n
0's in array 1 must be removed and replaced

Algorithm:
  - Loop over array2, selecting each element
  - loop over array1, find the first element that is greater than or equal to
      array2 element
      - place the element in that spot in array1, removing the last 0
  - repeat until array2s length is 0
  - return array 1

*/

function merge(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i += 1) {
    let element = nums2[i];
    for (let j = 0; j < nums1.length; j += 1) {
      if (nums1[j] >= element) {
        nums1.splice(j, 0, element);
        nums1.pop();
        break;
      } else if (j > m) {
        nums1.splice(j, 0, element);
        nums1.pop();
        m += 1;
        break;
      } else if (nums1[j] < element && nums1.length === m + n) {
        nums1.splice(j, 0, element);
        break;
      } else if (nums1[j] < element) {
        nums1.splice(j, 0, element);
        nums1.pop();
        break;
      }
    }
  }

  return nums1;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([0], 1, [1], 1)); // [0, 1]
console.log(merge([1], 1, [], 0)); // [1]
