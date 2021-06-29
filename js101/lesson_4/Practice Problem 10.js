let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let agesArr = Object.values(ages);
console.log(agesArr);
console.log(Math.min(...agesArr));
// let min = agesArr[0];
// agesArr.forEach(ele => {
//   if (ele < min) {
//     min = ele;
//     return min;
//   }
// });
// console.log(min);

let agesArr = [ 32, 30, 5843, 10, 22, 237 ]
Math.min(...agesArr)