/* 
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

[6, 2, 7, 1, 4]
[[6, 2], [7, 1], [4]]
[[[6], [2]], [[7], [1]], [[4]]]

[
  [ [ 7 ], [ 3 ] ],
  [ [ 9 ], [ 15 ] ],
  [ [ 23 ], [ 1 ] ],
  [ [ 6 ], [ 51 ] ],
  [ [ 22 ], [ 37 ] ],
  [ [ 54 ], [ 43 ] ],
  [ [ 5 ], [ 25 ] ],
  [ [ 35 ], [ 18 ] ],
  [ [ 46 ] ]
]

[
  [ 3, 7 ],   [ 9, 15 ],
  [ 1, 23 ],  [ 6, 51 ],
  [ 22, 37 ], [ 43, 54 ],
  [ 5, 25 ],  [ 18, 35 ],
  [ 46 ]
]

[
  [ 3, 7, 9, 15 ],
  [ 1, 6, 23, 51 ],
  [ 22, 37, 43, 54 ],
  [ 5, 18, 25, 35 ],
  [ 46 ]
]

[
  [ 1, 3, 6, 7, 9, 15, 23, 51 ],
  [ 5, 18, 22, 25, 35, 37, 43, 54 ],
  [ 46 ]
]

[
  [ 1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 51, 54 ],
  [ 46 ]
]

[
  [ 1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54 ],
]


Input: an array
Output: a sorted array

Requirements:
Split the array into nested arrays of 2 elements at a time
Split the nested arrays into nested arrays (3 levels total)
then use merge sort on each pair of nested arrays to joing them back together
return a NEW array
data types will be either all strings or all numbers


[9, 5, 7, 1]
[[9, 5], [7, 1]] 

Algorithm:
  - create a function that takes an array, and returns 


Mental model:
  - iterate over the array
    - push slices of 2 elements to a new array in arrays
    - map over each nested array, replacing it with an array with each element
         in it's own nested array
  
  - iterate over the array
    - pass each nested pair to merge function
  iterate over the array again
    - pass each nested pair to merge function
  
  - return the resulting array


*/
function mergeSort(array) {
  if (array.length === 1) return array;

  let arr1 = array.slice(0, array.length / 2);
  let arr2 = array.slice(array.length / 2);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
}

function merge(array1, array2) {
  // console.log(array1, array2);
  if (!array2) return array1;
  let length = array1.length + array2?.length;
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

// console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]