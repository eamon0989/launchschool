// function leadingSubstrings(string) {
//   let returnArray = [];
//   for (let i = 0; i < string.length; i += 1) {
//     returnArray.push(string.slice(0, i + 1));
//   }

//   return returnArray;
// }

// function leadingSubstrings(string) {
//   return [...string].reduce((array, _, index) => {
//     array.push(string.slice(0, index + 1));
//     return array;
//   }, []);
// }

function leadingSubstrings(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]