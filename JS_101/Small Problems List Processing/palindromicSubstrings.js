// import 'allsubstrings.js';

function palindromes(string) {
  return outerLoop(string).filter(str => str.length > 1).filter(str => str === str.split('').reverse().join(''));
}

function outerLoop(string) {
  return [...string].map((_, index) => innerLoop(string.slice(index))).flat();
}

function innerLoop(string) {
  return [...string].map((_, index) => string.slice(0, index + 1));
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