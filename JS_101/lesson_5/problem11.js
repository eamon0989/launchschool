
// let arr = [['b', 'c', 'a'], [2, 11, 3], ['blue', 'black', 'green']];

// arr.forEach(arr => {
//   if (typeof arr[0] === 'string') {
//     arr.sort();
//   } else if (typeof arr[0] === 'number') {
//     arr.sort((a, b) => a - b);
//   }
// });

// let newArr = arr.slice();
// newArr.forEach(arr => arr.sort());
// console.log(newArr);

// arr[0].sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return +1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr[0]);

// let newArr = arr.map(arr => {
//   if (typeof arr[0] === 'string') {
//     return arr.slice().sort((a, b) => {
//       if (a > b) {
//         return -1;
//       } else if (a < b) {
//         return +1;
//       } else {
//         return 0;
//       }
//     });
//   } else if (typeof arr[0] === 'number') {
//     return arr.slice().sort((a, b) => Number(b) - Number(a));
//   }
// });
// console.log(newArr);
