function palindromeSubstrings(string) {
  let returnArray = [];
  for (let i = 0; i < string.length; i += 1) {
    for (let j = i + 2; j < string.length; j += 1) {
      returnArray.push(string.slice(i, j));
    }
  }
  // let result = [];
  // for (let i = 0; i < string.length - 1; i += 1) {
  //   for (let j = 2; j < string.length - i; j += 1) {
  //     let substring = string.slice(i, i + j);
  //     result.push(substring);
  //   }
  // }
  // console.log(returnArray);
  // console.log(result);
  let palindroms = [];
  for (let i = 0; i < returnArray.length; i += 1) {
    if (getPalindromes(returnArray[i])) {
      palindroms.push(returnArray[i]);
    }
  }
  return palindroms;
}

function getPalindromes(string) {
  return string === string.split('').reverse().join('');
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("abcddcba"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []
