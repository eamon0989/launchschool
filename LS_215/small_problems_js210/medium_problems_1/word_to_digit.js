/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - string
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
  - string with number words replaced with numbers
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - 
  - 
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - given a string, replace any number words with their corresponding number (0-9)
DATA STRUCTURE:
  - array, string
ALGORITHM (break into problems + guard clauses):
  - create an array containing the number words
  - replace all instances of words that appear in that array with their index
  - return the string
*/

// CODE:
const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  return string.replace(/[a-z]+/g, match => {
    return words.includes(match) ? words.indexOf(match) : match;
  })
}

// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."