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

let statement = "The Flintstones Rock";
let returnObj = {};
statement.split('').filter(char => char !== ' ').forEach(ele => {
  if (!returnObj.hasOwnProperty(ele)) {
    returnObj[ele] = 1;
  } else {
    returnObj[ele] += 1;
  }
});

console.log(returnObj);

