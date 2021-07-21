/* The input is a string str of digits. Cut the string into chunks
(a chunk here is a substring of the initial string) of size sz (ignore the
  last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits
is divisible by 2, reverse that chunk; otherwise rotate it to the left by
one position. Put together these modified chunks and return the result as a
string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk
of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".

Input: String of digits
Output: String of digits

Rules:
Take the string and split it into substrings num size
If there is a substring less than num size, exclude it
if num is greater than the length of the string, return an
empty string
if num is 0, return an empty string
if the substring is an even number, reverse it
otherwise, take the first digit and move it to the end of the string
join the mutated substrings and return them

Algorithm:
  - if num is 0 or larger than the length of the string, return an empty string
  - initialize an empty array
  - loop over the string, appending every substring that is num chars long
      to the array
  - iterate throught the array, checking if the number represented by the string
      is evenly divisible by 2
    - if it is, reverse the string
    - otherwise, take the first digit and append it to the end
  - join the substrings and return them

*/
function revrot(string, num) {
  if (string.length === 0) return '';
  if (string.length < num) return '';
  let substrings = [];
  let substring = '';

  for (let index = 0; index < string.length; index += 1) {
    substring += string[index];

    if (substring.length === num) {
      substrings.push(substring);
      substring = '';
    }
  }

  return modifySubs(substrings).join('');
}

function modifySubs(array) {
  return array.map(subStr => {
    let sum = subStr.split('').map(Number)
      .map(num => num * num)
      .reduce((acc, num) => acc + num);

    if ((sum % 2 === 0)) {
      return subStr.split('').reverse().join('');
    } else {
      subStr = subStr.split('');
      subStr.push(subStr.shift());
      subStr = subStr.join('');
      return subStr;
    }
  });
}

console.log(revrot("123456987654", 6)); //// --> "234561876549"
console.log(revrot("123456987653", 6)); //// --> "234561356789"
console.log(revrot("66443875", 4)); //// --> "44668753"
console.log(revrot("66443875", 8)); // --> "64438756"
console.log(revrot("664438769", 8)); // --> "67834466"
console.log(revrot("123456779", 8)); // --> "23456771"
console.log(revrot("", 8)); // --> ""
console.log(revrot("123456779", 0)); // --> ""
console.log(revrot("563000655734469485", 4)); // --> "0365065073456944"