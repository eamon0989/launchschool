// input a string of words
// output - the next to last word

// overview - convert string to an array, return length -2, return as a string
/*
Further exploration

Return the middle word of a sentence

edge cases
no words, only one word, even number of words, non string input, string uses
other format instead of spaces
Needs to have an odd number of words, and at least 3 to have a middle word

*/

function penultimate(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

function middleWord(string) {
  if (string.length < 1) {
    return '';
  }
  let array = string.trim().split(' ');
  return array[Math.floor(array.length / 2)];
}

console.log(middleWord('Launch School is great!'));
console.log(middleWord('Launch School is the greatest school!'));


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true