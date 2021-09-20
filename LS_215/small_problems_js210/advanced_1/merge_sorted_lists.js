/* 
Input: 2 sorted arrays
Output: 1 sorted array 

Requirements;
return a new array with the elements from both arrays sorted
do not sort the new array
new array length is equal to the length of both arrays
build the array one element at a time in the proper order


[1, 5, 9], [2, 6, 8]
1, 2 - push 1
5, 2 - push 2
5, 6 - push 5
9, 6 - push 6
9, 8 - push 8
9,   - push 9

Algorithm:

  - set 2 pointers to 0
  - initialize a results array
  - while results is less than the sum of the 2 arrays length
    - if p1s value < p2s value push p1s value
    - else push p2
    - if either is undefined, push the other
  - return the new array
*/
function merge(array1, array2) {
  let length = array1.length + array2.length;
  let results = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (results.length < length) {
    if (pointer1 >= array1.length) {
      results.push(array2[pointer2]);
      pointer2 += 1;
    } else if (pointer2 >= array2.length) {
      results.push(array1[pointer1]);
      pointer1 += 1;
    }

    if (array1[pointer1] < array2[pointer2]) {
      results.push(array1[pointer1]);
      pointer1 += 1;
    } else if (array2[pointer2]) {
      results.push(array2[pointer2]);
      pointer2 += 1;
    }
  }

  return results;
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]