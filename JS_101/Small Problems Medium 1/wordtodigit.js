/* Write a function that takes a sentence string as an argument and
returns that string with every occurrence of a "number word" — 'zero',
'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
— converted to its corresponding digit character.

input: string
output: string with numbers replaced with digits

rules: if there is a word representing a number, replace the word with
it's digit

algorithm:
 - initialize an array containing the number words starting from zero
 - convert to array
 - loop through array
   - if a word is found in the numbers array, replace it with it's index number
 - coerce back to a string and return



*/
// const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// function wordToDigit(string) {
//   return string.split(' ').map(word => {
//     let punctuation = '';
//     if (word.match(/\W/gi)) {
//       punctuation = word.match(/\W/gi) || [].join('');
//       word = word.match(/\w/gi).join('');
//     }
//     if (NUMBERS.includes(word)) {
//       return NUMBERS.indexOf(word) + punctuation;
//     }

//     return word + punctuation;
//   }).join(' ');
// }

// function wordToDigit(string) {
//   NUMBERS.forEach((word) => {
//     let numWord = new RegExp (`\\b${word}\\b`, 'gi');
//     string = string.replace(numWord, NUMBERS.indexOf(word));
//   });

//   return string;
// }

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  let regex = new RegExp(`\\b${NUMBERS.join("\\b|\\b")}\\b`, "gi");
  return string.replace(regex,
    match => NUMBERS.indexOf(match.toLowerCase()));
}


// /\w+/gi selects each word, passes it to arrow function, returns the index of
// the word if it's found in the array, if not it returns the word.
// Bob
// function wordToDigit(string) {
//   return string.replace(/\w+/gi,
//     (word) => (NUMBERS.includes(word) ? NUMBERS.indexOf(word) : word));
// }

// function wordToDigit(string) {
//   return string.replace(/\w+/gi,
//     (word) => {
//       return NUMBERS.includes(word.toLowerCase()) ?
//         NUMBERS.indexOf(word.toLowerCase()) : word
//     });
// }


console.log(wordToDigit('Please call me at zero five five five one two three four nine. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));