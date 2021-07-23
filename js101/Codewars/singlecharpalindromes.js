/* You will be given a string and you task is to check if it is possible
to convert that string into a palindrome by removing a single character.
If the string is already a palindrome, return "OK". If it is not, and we
can convert it to a palindrome by removing one character, then return
"remove one", otherwise return "not possible". The order of the characters
should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right.
solve("abbaab") = "not possible".
More examples in the test cases.

Good luck!

Input: string

Output: string

Rules:
if string is a palindrome return OK
if string with one letter removed is a palindrome,
return 'remove one'
otherwise return 'not possible'
only alphanumeric chars
all lowercase

Algorithm:

  - create a helper function isPalindrome
    - check if the string is the same as the string reversed
  - use isPalindrome to check if the string is a palindrome
    - if so, return ok
  - iterate through the string, removing one char at a time
    - use isPalindrome to check if the string is now a palindrome
    - if so return 'remove one'
  - if upon reaching the end of the string it's not a palindrome,
    return 'not possible'

*/

function solve(string) {
  if (isPalindrome(string)) {
    return 'OK';
  }

  for (let index = 0; index < string.length; index += 1) {
    if (isPalindrome(string.slice(0, index) + string.slice(index + 1))) {
      return 'remove one';
    }
  }

  return 'not possible';
}

function isPalindrome(string) {
  return string === string.split('').reverse('').join('');
}

console.log(solve("abba"));//,"OK");
console.log(solve("abbaa"));//,"remove one");
console.log(solve("abbaab"));//,"not possible");
console.log(solve("madmam"));//,"remove one");
console.log(solve("raydarm"));//,"not possible");
console.log(solve("hannah"));//,"OK");