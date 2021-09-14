// function swap(string) {
//   return string.split(' ').map(string => {
//     string = string.split('');
//     [string[0], string[string.length - 1]] = [string[string.length - 1], string[0]] 
//     return string.join('');
//   }).join(' ');
// }

function swap(sentence) {
  return sentence.replace(/(\b\w)(\w*)(\w\b)/g, '$3$2$1');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"