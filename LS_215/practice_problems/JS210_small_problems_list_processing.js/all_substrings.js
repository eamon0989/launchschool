function leadingSubstrings(string) {
  let results = [];
  for (let i = 0; i < string.length; i += 1) {
    results.push(string.slice(0, i + 1));
  }

  return results;
}

function substrings(string) {
  let results = [];

  for (let i = 0; i < string.length; i += 1) {
    results.push(...leadingSubstrings(string.slice(i, string.length + 1)));
  }

  return results;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]