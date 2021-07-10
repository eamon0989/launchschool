// function isBalanced(string) {
//   let object = [...string].reduce((object, char) => {
//     if (/[()]/.test(char)) {
//       if (object[char]) {
//         object[char] += 1;
//       } else {
//         object[char] = 1;
//       }

//     }
//     return object;
//   }, {});

//   if (object[')'] === object['(']) {
//     return true;
//   }

//   return false;
// }

function isBalanced(string) {
  let count = 0;

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);