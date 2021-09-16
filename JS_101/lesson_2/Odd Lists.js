/*
input = an array
output = an array containing odd elements, e.g. 1st, 3rd, 5th

overview

Use array.filter, condition is if array's current index % 2 === 0


*/
function oddities(array) {
  return array.filter((_, index) => index % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []