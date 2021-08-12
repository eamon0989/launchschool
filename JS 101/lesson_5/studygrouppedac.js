/*
A pangram is a sentence that contains every single letter of the alphabet at least once.  For example: the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Problem

input: string
output: boolean

rules:
- ignore numbers and puncutation
- ignore case => case insensitive
- what is a pangram? => a word that uses the letters A-Z at least once 
- letters can be contained more than once



Examples

rules:
- a string shorter than 26 chars is necessarily "false"
- when you find a letter that's not present, you can stop immediately and return false



Data structures

input: string
output: boolean
intermediary steps: string or convert to an array


A
 - Declare a variable called letters and initialize it to a string containing
all the letters of the alphabeth in lowercase e.g. 'abcde...'
convert our letters string to an array (as it's easier than writing
out an array with 26 elements)
take the string that has been input as an argument and convert it
to lower case.
loop through the array containing the alphabet,
checking if each letter is present in our string.
(JS specific - call the every method on our array, checking if its included
  in our string)
If any letter is not present in the string, return false.
When the entire array has gone through the loop and if it hasn't returned
false, return true.

*/

function isPangram(string) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  
}


console.log(isPangram('The quick brown fox jumps over the lazy dog.') == true)
console.log(isPangram('This is not a pangram.') == false)