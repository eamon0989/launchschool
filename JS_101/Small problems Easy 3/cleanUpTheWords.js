/* - declare a variable chars and initialize it to the alphabet
 - declare a variable newStr and initialize it to an empty string
 - iterate over the input string, every char that is found in char,
     concat it to the end of newStr
   - if a char is not included in chars, concat a space
   - if the last char of newStr is a space, skip to the next char
 - return newStr */

function cleanUp(string) {
  return string.replace(/[^a-z]/gi, ' ').replace(/\s+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("---howdy *&^  *& my +*jim& line?"));    // " what s my line "
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "