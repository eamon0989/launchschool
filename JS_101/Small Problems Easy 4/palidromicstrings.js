
/*  - store user input as a variable
 - check if string length is 2 or greater, otherwise return false
 - make a copy of user input and coerce it to an array, reverse it and
     coerce it back to a string
 - check if user input is the same as reversed string
 - if it's identical, return true, else return false */

function isPalindrome(string) {
  if (string.length < 2) {
    return false;
  }
  let copy = string.slice().split('').reverse().join('');

  if (copy === string) {
    return true;
  }

  return false;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true