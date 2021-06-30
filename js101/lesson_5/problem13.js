let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// arr.sort((a, b) => {
//   a = a.reduce((acc, ele) => {
//     if (ele % 2 !== 0) {
//       acc += ele;
//       return acc;
//     }
//     return acc;
//   }, 0);
//   b = b.reduce((acc, ele) => {
//     if (ele % 2 !== 0) {
//       acc += ele;
//       return acc;
//     }
//     return acc;
//   }, 0);
//   console.log(a, typeof a);
//   return Number(a) - Number(b);
// });
// console.log(arr);

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num);
  let oddSumB = b.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num);

  return oddSumA - oddSumB;
});

console.log(arr);
