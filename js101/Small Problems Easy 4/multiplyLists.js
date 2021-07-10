/*
Write a function that takes two array arguments, each containing a list
of numbers, and returns a new array that contains the product of each pair
of numbers from the arguments that have the same index. You may assume that
the arguments contain the same number of elements.

INPUT: 2 arrays
OUTPUT: array containing the products of elements with the same index

RULES
if 2 elements have the same index, multiply them together
arrays contain equal elements

ALGORITHM

- use reduce to return a new array containing the product of elements with same 
  index


*/
function multiplyList(arr1, arr2) {
  return arr1.reduce((array, _, index) => {
    array.push(arr1[index] * arr2[index]);
    return array;
  }, []);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]