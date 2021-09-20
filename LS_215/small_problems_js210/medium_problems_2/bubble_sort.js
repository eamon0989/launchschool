/* 
Input: array
Output: sorted array

Requirements:
mutate the array
sort the array
return the array

Algorithm:
  - if array has only 1 element, return array
  - set changed = true
  - while true
    - change changed to false
    - loop over the array starting from index 1
      - check if the current element is less than the previous
        - if so swap them
        - change changed to true
    - keep looping until no changes are made
  - return the array


*/

function bubbleSort(array) {
  if (array.length < 2) return array;

  let changed = true;

  while (changed) {
    changed = false;
    
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]]
        changed = true;
      }
    }
  }

  return array;
}

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]