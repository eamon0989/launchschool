// function union(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

function union(...args) {
  return args.flat().filter((ele, index, array) => index === array.indexOf(ele));
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]