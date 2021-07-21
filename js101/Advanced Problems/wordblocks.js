/* 
input: string
output: boolean

rules:
if 2 letters in the string are on the same block,
return false
otherwise return true
case doesn't matter
if a letter is repeated return false

algorithm:

2 ways
  - use an array and remove the 'block' when a letter is used
  - check each letter with every other combination of letters and
      see if they are in the same array

  - initialize an array with each subarray containing a letter combination
  - iterate through the string, removing the block containing each letter
  - if a letter is not found in the array return false
  - otherwise return true

*/

/* 
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
 */
function isBlockWord(string) {
  let letters = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
    ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'],
    ['L', 'Y'], ['Z', 'M']];

  return [...string.toUpperCase()].every(char => {
    return letters.some((subArr, index) => {
      if (subArr.includes(char)) {
        letters.splice(index, 1);
        return true;
      }
    });
  });
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false