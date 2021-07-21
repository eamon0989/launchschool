/* There is an array of strings. All strings contains similar
letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces
symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

Input: array of strings
Output: unique string

Rules:
all strings contain the same letters except for 1
spaces no not matter
symbols and numbers seem to be a possibility
there are always at least 3 strings

Human solution
Look at each string, check the characters used
find the string with different characters from the rest

Algorithm:


  - iterate through the first string, add unique chars to a new string
  - iterate through the other strings and replace their chars with the chars
      from the first string
      - if no chars remain, the string with remaining chars is the unique one
  - otherwise do the same thing but using the chars from the second string


find what chars are in the first string
filter the other strings by those chars
check if there is only one string left
if not, try filtering by the chars in the second string
*/

function findUniq(array) {
  let chars = array[0].match(/([\w\W])(?!\1)/gi) || [];
  let regex = new RegExp(`[${chars.join('')}]`, 'gi');
  console.log(chars);
  let filtered = array.map(string => string.replace(regex, '')).map(string => (string ? string : false));
  let index;
  if (filtered.filter(string => string).length > 1) {
    return array[0];
  }
  filtered.forEach((element, idx) => {
    return element ? index = idx : element;
  });
  return array[index];
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));// === 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));// === 'foo'
console.log(findUniq([ 'a', 'p', 'p', 'p' ]));// === 'a'