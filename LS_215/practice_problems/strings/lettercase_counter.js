function letterCaseCount(string) {
  return {
    lowercase: string.match(/[a-z]/g)?.length || 0,
    uppercase: string.match(/[A-Z]/g)?.length || 0,
    neither: string.match(/[^a-z]/gi)?.length || 0,
  }
}

// function letterCaseCount(string) {
//   let count = {};
//   count.lowercase = string.match(/[a-z]/g)?.length || 0;
//   count.uppercase = string.match(/[A-Z]/g)?.length || 0;
//   count.neither = string.match(/[^a-z]/gi)?.length || 0;

//   return count;
// }

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }