// function removeVowels(array) {
//   array = array.map(string => string.match(/[^aeiou]/gi));
//   return array.map(subArr => (subArr === null ? '' : subArr.join(''))).flat();
// }

function removeVowels(array) {
  return array.map(string => string.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]