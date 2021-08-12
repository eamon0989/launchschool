function countVowels(string) {
  if (string.trim().length === 0) {
    return 0;
  }

  let vowels = /[aeiou]/gi;

  return string.match(vowels).length;
}

console.log(countVowels('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(countVowels('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(countVowels("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(countVowels(''));