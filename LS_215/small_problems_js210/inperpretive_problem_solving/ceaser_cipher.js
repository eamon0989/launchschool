/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - a string and a number
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - string, int
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
  - a string
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
  - Given a string and an integer, replace each character with the char n places ahead
  - if this number is greater than the length of the alphabet, wrap around
    - e.g. a 27 would be b
  - lower and uppercase chars are treated differently
  - all other input stays the same
DATA STRUCTURE:
  - 
ALGORITHM (break into problems + guard clauses):
  - initialize a string of the alphabet
  - divide n by 26, round up, call that wraps
  - repeat alphabet string wraps times + 1
  - select each letter of the input string, detect if upper or lowercase
    - find index of letter in alphabet string
    - replace letter with index + n's letter
    - ignore non alphabetic chars
  - return string
*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

function caesarEncrypt(string, num) {
  let wraps = Math.ceil(num / 26);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(wraps + 1);

  return string.replace(/[a-z]/gi, char => {
    let isUpper = /[A-Z]/.test(char);
    let index = alphabet.indexOf(char.toLowerCase());
    let replacement = alphabet[index + num];
    return isUpper ? replacement.toUpperCase() : replacement;
  });
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"