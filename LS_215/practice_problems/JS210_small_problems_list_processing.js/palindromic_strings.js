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

function palindromes(string) {
  let subs = substrings(string);
  return subs.filter(str => str.length > 1)
    .filter(str => str === str.split('')
    .reverse().join(''));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]