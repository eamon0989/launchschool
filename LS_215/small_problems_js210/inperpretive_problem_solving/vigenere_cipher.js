/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - string, keyword
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - Do I have to worry about any other input types?
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
  EDGE CASES:
  - Invalid Input or Values (data types or values) are numbers floats?
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - encypted string
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - 
  - 
  - 
TEST CASES:
  console.log(vigenereCipher('Pineapples don't go on pizzas!) === Bmnxmtpeqw dhz'x gh ar pbldal!); // 
  console.log(vigenereCipher() === ); // 
  console.log(vigenereCipher() === ); // 
DESCRIBE THE PROBLEM:
  - given a string and a keyword, encrypt the string
  - each letter in the keyword represents a number
    - a = 0, b = 1, c = 2 etc (corresponds to the letters index)
    - keyword case doesn't matter
  - replace only alphabetic chars
  - maintain case in the return string
  - each char is checked against the index of the corresponding keyword's letter
  - if the string is longer than the keyword, the keyword is repeated as many times
      as is necessary
  
DATA STRUCTURE:
  - an alphabet string
  - an array to keep the keyword's index numbers in
  - the input string will stay a string

ALGORITHM (break into problems + guard clauses):
  - initialize a string containing the alphabet in lowercase repeated twice
  - store the keyword in a new variable
    - check how many times we can divide the input string's length by the 
        length of the keyword string
    - repeat the keyword string that number of times
    - split the keyword string into an array
    - map over that array with the index number of each char from the alphabet string
  - initialize a count variable to 0
  - for each char that is an alphabetic letter
    - find the index of each char in the alphabet
    - replace each char with the index + the number found at keywords index of count
    - check if the char is uppercase
    - for each char, count += 1
    - if so return an uppercase char
  - return the string
  */

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

function vigenereCipher(string, keyword) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);
  let times = Math.ceil(string.length / keyword.length);
  // keys is an array containing the index of each letter of the keyword
  let keys = keyword.toLowerCase()
    .replace(/[^a-z]/gi, '')
    .repeat(times)
    .split('')
    .map(char => alphabet.indexOf(char));
  
  let count = 0;
  // replaces letters with the letter at chars index + the keyword index
  return string.replace(/[a-z]/gi, char => {
    let isUpper = /[A-Z]/.test(char);
    let index = alphabet.indexOf(char.toLowerCase());
    let replacement = alphabet[index + keys[count]];
    count += 1;
    return isUpper ? replacement.toUpperCase() : replacement;
  });
}

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'meat') === `Bmnxmtpeqw dhz'x gh ar pbldal!`); // 
console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'Me;at') === `Bmnxmtpeqw dhz'x gh ar pbldal!`); // 
console.log(vigenereCipher(`Pineapples don't go on pizzas!`, 'cab') === `Riogaqrlfu dpp't hq oo riabat!`); // 
console.log(vigenereCipher(`Dog`, 'Rabbit') === `Uoh`); // 
