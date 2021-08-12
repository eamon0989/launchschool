/*
Input: string
Output: array of strings

Rules:
a palindrom is a string that reads the same backwards as forwards aea === aea
substring should be sorted by their order of appearance in the input string
duplicates should be included
case matters, A !== a
single chars are not palindromes
2 letters can be palindromes

Human solution:
read through the string, look for sequences of chars that are the same forwards
and backwards
find all possible combinations of substrings
store each substring in an array in the order found


Algorithm:
  -  initialize a substrings array
  - find all possible combinations of substrings
    - loop over the string using a nested loop
      - take a substring from index of first loop to
        end, then iterate over that starting from the first char
        adding 1 char each time, pushing each string to an array
  - pass them to the isPalindrome variable
    - check if string reversed is the same as the string
    - return true or false
  - return filtered array

 */
function palindromes(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    for (let endIndex = startIndex; endIndex < string.length; endIndex += 1) {
      substrings.push(string.slice(startIndex, endIndex + 1));
    }
  }
  return substrings.filter(string => isPalindrome(string));
}

function isPalindrome(string) {
  if (string.length < 2) return false;
  return string === [...string].reverse().join('');
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