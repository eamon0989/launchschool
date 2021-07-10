// function substrings(string) {
//   let returnArray = [];
//   for (let i = 0; i < string.length; i += 1) {
//     for (let j = i + 1; j < string.length + 1; j += 1) {
//       returnArray.push(string.slice(i, j));
//     }
//   }

//   return returnArray;
// }


// function substrings(string) {
//   return [...string].map((_, index) =>
//     leadingSubstrings(string.slice(index))).flat();
// }

// function leadingSubstrings(string) {
//   return [...string].map((_, index) =>
//     string.slice(0, index + 1));
// }

// console.log(substrings('abcde'));
















function outerLoop(string) {
  return [...string].map((_, index) => innerLoop(string.slice(index))).flat();
}

function innerLoop(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
}


console.log(outerLoop('abcde'));
// console.log(outerLoop('abcd'));       // []
// console.log(outerLoop('madam'));      // [ "madam", "ada" ]
// returns
/* [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */