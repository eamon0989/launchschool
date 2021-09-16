/*
- store user input as a variable
 - check if new string length is 2 or greater, otherwise return false
 - declare an empty string variable
   - if string contains any non-alphanumeric chars, iterate over the string and
       concat any alphanumeric chars to the new string
 - check if new string length is 2 or greater, otherwise return false
 - make a copy of user input and coerce it to an array, reverse it and
     coerce it back to a string
 - check if user input is the same as reversed string
 - if it's identical, return true, else return false
*/
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/\W/gi, '');

  return isPalindrome(string);
}


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

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false