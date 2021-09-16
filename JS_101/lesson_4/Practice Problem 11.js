// let statement = "The Flintstones Rock";
// let chars = statement.split('');
// let returnObj = {};

// for (let index = 0; index < chars.length; index += 1) {
//   let char = chars[index];
//   if (char === ' ') {
//     continue;
//   }
//   if (!returnObj.hasOwnProperty(char)) {
//     returnObj[char] = 1;
//   } else (returnObj[char] += 1);

// }
// console.log(returnObj);

// let statement = "The Flintstones Rock";
// let returnObj = {};
// statement.split('').filter(char => char !== ' ').forEach(ele => {
//   if (!returnObj.hasOwnProperty(ele)) {
//     returnObj[ele] = 1;
//   } else {
//     returnObj[ele] += 1;
//   }
// });

// console.log(returnObj);
/* 
let statement = "The Flintstones Rock";
let returnObj = {};
statement.split('').filter(char => char !== ' ').forEach(ele => {
  returnObj[ele] = returnObj[ele] || 0;
  returnObj[ele] += 1;
});

console.log(returnObj);
 */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
let array3 = [];
console.log(array2.concat(array2[0]));
// console.log(array2.slice(0, 1));
// console.log(array2.splice(0, 1));
console.log(array3);
/* 
arr.forEach(elem => {
  arr.push(100);
  console.log(elem);
}); // 1, 2, 3, 4, 5, 6, 7

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(elem => {
  arr.splice(0, 1);
  console.log(elem);
}); // 1, 3, 5, 7

let dog = 'fido';
dog.replace('f', 'F');
console.log(dog); */