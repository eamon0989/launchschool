/*
Input: array
Output: sorted array

Rules:
iterate through the array 2 elements at a time
If a is greater than b, swap
otherwise, continue
keep iterating until you complete a full pass
without any swaps

Algorithm:
  - Use a while true loop to keep passing over the array until a full pass is
    made without any swaps
    - Use a nested for loop that loops through the array and compares each ele
      with the next one
      - if a > b, swap. Otherwise continue
*/
// function bubbleSort(array) {

//   while (true) {
//     let copy = array.slice();
//     let changes = null;
//     array.forEach((ele, index) => {
//       if (ele > array[index + 1]) {
//         changes = array.splice(index, 0, array.splice(index + 1, 1)[0]);
//       }
//     });

//     if (array.every((ele, index) => ele === copy[index])) {
//       break;
//     }
//     if (changes === null) break;
//     changes = null;
//   }

//   return array;
// }

function bubbleSort(array) {
  let changes = true;

  while (changes) {
    changes = false;

    for (let index = 0; index < array.length - 1; index += 1) {

      if (array[index] <= array[index + 1]) {
        continue;
      }

      [array[index], array[index + 1]] = [array[index + 1], array[index]];
      changes = true;
    }
  }

  return array;
}
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]


let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

