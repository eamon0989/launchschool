/* Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in
"asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters
long so your code will need to be efficient.

The input will only consist of lowercase characters
and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

Input: string
Output: string

Rules:
if there is only one char, return one char
there are only lowercase chars
the longest substring consists of letters increasing from a - z
if a letter is lower than the letter behind it, it is not part of the substring
z will be the highest letter

Human solution:
Go through the string, starting from the first letter, and include all letters
  that are greater than or equal to the previous in a string
  if a letter is less than the previous, start a new string,
  storing the previous if it is longer than the previous longest


Options
convert chars to char numbers

split strings on z and check substrings

Algorithm:
  - initialize longest string variable
  - iterate through the string, adding letters to it as long as it's greater
      than or equal to the letter before it
  - otherwise, check if current string is longer than longest, if so store it
  - otherwise, reset current string to empty and add the current char

*/
function longest(string) {
  if (string.length === 1) return string;

  let matches = string.match(
    /a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g);
  console.log(matches);
  let longest = '';
  let currentStr = '';

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (char >= currentStr[currentStr.length - 1]) {
      currentStr += char;
    } else {
      if (currentStr.length > longest.length) {
        longest = currentStr;
      }

      currentStr = '';
      currentStr += char;
    }
  }

  if (currentStr.length > longest.length) longest = currentStr;

  return longest;
}

console.log(longest('asd'));//as
console.log(longest('nab'));//ab
console.log(longest('abcdeapbcdef'));//abcde
console.log(longest('asdfaaaabbbbcttavvfffffdf'));//aaaabbbbctt
console.log(longest('asdfbyfgiklag'));//fgikl
console.log(longest('z'));//z
console.log(longest('zyba'));//z