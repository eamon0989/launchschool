/*
Input: string

Output: string

Rules:
Prefix is the first few letters of a word
only lowercase letters input


Algorithm:
  - declare an empty string variable called prefix
  - iterate over the first string, checking if the letter at each index is the
      same as the letter at the same index of the other strings
      - if it is, add it to prefix and repeat
      - if not, return prefix
 */

function commonPrefix(array) {
  let prefix = '';
  let string1 = array[0];
  for (let index = 0; index < string1.length; index += 1) {

    if (array.every(string => string[index] === string1[index])) {
      prefix += string1[index];
    } else {
      break;
    }
  }

  return prefix;
}

console.log(commonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(commonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate'])); // 'inters'
console.log(commonPrefix(['throne', 'dungeon'])); // ''
console.log(commonPrefix(['throne', 'throne'])); //throne