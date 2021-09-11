function isAllUnique(string) {
  let count = {};
  for( let i = 0; i < string.length; i+= 1) {
    if (count.hasOwnProperty(string[i].toLowerCase())) {
      return false;
    } else {
      count[string[i].toLowerCase()] = 1;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true