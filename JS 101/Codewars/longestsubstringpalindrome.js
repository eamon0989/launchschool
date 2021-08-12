/*
select a letter in the string
for odd string length palindromes check if letter before and after are the same,
add to string
for even length palindromes
*/

// function palindromes(string) {
//   let longest = '';
//   let current = [];
//   for (let i = 0; i < string.length; i += 1) {
//     let index = 1;
//     // console.log(longest, current);
//     current = [];
//     current.push(string[i]);
//     while (string[i + index] === string[i - index] && index <= string.length / 2) {
//       current.push(string[i + index]);
//       current.unshift(string[i - index]);
//       index += 1;
//     }
//     if (longest.length < current.join('').length) {
//       longest = current.join('');
//     }
//   }
//   return longest;
// }

// function palindromes(string) {
//   let palindromes = [];
//   let current = [];
//   for (let i = 0; i < string.length; i += 1) {
//     let index = 1;
//     // console.log(longest, current);
//     current = [];
//     current.push(string[i]);
//     while (string[i + index] === string[i - index] && index <= string.length / 2) {
//       // current.push(string[i + index]);
//       // current.unshift(string[i - index]);
//       palindromes.push(string.slice(string[i - index], string[i + index + 1]));
//       index += 1;
//     }
//     // if (longest.length < current.join('').length) {
//     //   longest = current.join('');
//     // }
//   }
//   return palindromes;
// }

function palindromes(string) {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
}

// console.log(longest_palindrome("abracadabra"));
// console.log(longest_palindrome("abracadabra"));

// console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

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