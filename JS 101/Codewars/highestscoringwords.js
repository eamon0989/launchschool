/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears
earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Input string
output: word

Rules:
Each letter is lowercase, worth the value of it's position in the alphabet
e.g. a = 1, b = 2 etc
if 2 words have the same value, the first to appear in the string wins

Algorithm
  - initialize const value = -96
  - split the string into words
  - loop over the words, converting each char to it's char code number
    - sum all the char code numbers in a new array
    - check which is the highest value
  - use the index of the highest value to retrieve the correct word from the
    array of words

*/
const sub = -96;

function high(string) {
  let words = string.split(' ');
  let codes = words.map(word => word
    .split('')
    .map(char => {
      return char.charCodeAt(0) + sub;
    })).map(sub => sub
    .reduce((acc, code) => acc + code));

  let indexOfGreatest = codes.indexOf(Math.max(...codes));

  return words[indexOfGreatest];
}

console.log(high('man i need a taxi up to ubud')); //, 'taxi');
console.log(high('what time are we climbing up the volcano')); //, 'volcano');
console.log(high('take me to semynak')); //, 'semynak');
console.log(high('aa b')); //, 'aa'); //;
console.log(high('b aa')); //, 'b'); //;
console.log(high('bb d')); //, 'bb'); //;
console.log(high('d bb')); //, 'd');
console.log(high('aaa b')); //, 'aaa');