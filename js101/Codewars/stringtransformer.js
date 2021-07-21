/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case
to lower case. Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Input: string
Output: string

Rules:
reverse the order of the word
change uppercase letters to lower and vice versa

Can we assume words are separated by spaces?

Algorithm:
  - split the words into an array, reverse the array
  - split the words into chars
  - iterate over chars, checking case and swapping
  - join the chars back to words
  - join the array back to a string
 */

function stringTransformer(string) {
  let array = string.split(' ');
  return array.map(words => words.split('').map(char =>
    ((char === char.toUpperCase()) ? char.toLowerCase() :
      char.toUpperCase())).join('')).reverse().join(' ');
}

console.log(stringTransformer('Example string')); //, 'STRING eXAMPLE'