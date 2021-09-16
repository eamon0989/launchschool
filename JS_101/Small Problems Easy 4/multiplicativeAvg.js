/*
Write a function that takes an array of integers as input,
multiplies all of the integers together, divides the result
by the number of entries in the array, and returns the result
as a string with the value rounded to three decimal places.


INPUT: array of numbers
OUTPUT:number with 3 decimal places as a string

RULES

minimum 2 numbers
multiply nums together
divide by length of the array
keep only 3 decimal place

ALGORITHM

 - iterate over the elements, multiplying them together
 - divide result by length of original array
 - keep only 3 decimal places on the number
 - return number as a string

*/
function multiplicativeAverage(array) {
  const length = array.length;
  let product = array.reduce((acc, el) => acc * el, 1);
  return (product / length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"