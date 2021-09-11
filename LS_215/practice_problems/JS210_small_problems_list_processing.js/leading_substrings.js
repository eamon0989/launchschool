// function leadingSubstrings(string) {
//   let results = [];
//   for (let i = 0; i < string.length; i += 1) {
//     results.push(string.slice(0, i + 1));
//   }

//   return results;
// }

function leadingSubstrings(string) {
  return [...string]
    .reduce((arr, _, index) => {
      arr.push(string.slice(0, index + 1))
      return arr;
    }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]