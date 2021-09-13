/* 
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

Input: string
Ouput: boolean

breakdown / understand

Letters come in blocks
If 2 letters from the same block appear in a string, output is false
case-insensitive
repeated letters means false


test cases / run through test cases manually

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('batchh');       // false

empty string - false?
Nonstring - false?
non alphabetic chars - false?

data structures

store blocks in an array of nested arrays
split string into an array

algorithm
  - store blocks in an array of nested arrays
  - split string into an array of chars
  - iterate through the string array
    - if char is in the block array, remove that block from the array
      - else return false
  - return true if finished iterating
  */

function isBlockWord(string) {
  let blocks = [['B', 'O'],   ['X', 'K'],   ['D', 'Q'],   ['C', 'P'],   ['N', 'A'],
  ['G', 'T'],   ['R', 'E'],   ['F', 'S'],   ['J', 'W'],   ['H', 'U'],
  ['V', 'I'],   ['L', 'Y'],   ['Z', 'M']];

  string = string.split('');
  for (let i = 0; i < string.length; i += 1) {
    if (blocks.some(arr => arr.includes(string[i].toUpperCase()))) {
      blocks = blocks.filter(arr => !arr.includes(string[i].toUpperCase()));
    } else {
      return false;
    }
  }

  return true;
}




console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('batchh'));     // false