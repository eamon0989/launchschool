/*
Input: string

Output: vowel, neither, both, consonants

Rules:
Ignore case, and any non alphabetic characters
vowels and consonants are evaluated separately
vowels are AEIOU
all test cases contain at least one vowel and one consonant
a single letter is considered a palindrome
a palindrome is the same backwards as forwards


Algorithm:
  - initialize 2 new strings, one with only the consonants from the string
      and the other with only the vowels (both strings lowercase only)
  - check if they are the same as they are reversed (coerce to an array, reverse
      and coerce back to a string)
  - return both if they both are palindromic, neither if neither are
      vowel if the vowels are and consonant if the consonants are
*/

function palindrome(string) {
  let vowelsStr = (string.match(/[aeiou]/gi) || []).join('').toLowerCase();
  let consonantsStr = (string.match(/([bcdfghjklmnpqrstvwxyz])/gi) || []).join('').toLowerCase();
  let vowels = checkPalindrome(vowelsStr);
  let consonants = checkPalindrome(consonantsStr);

  if (vowels && consonants) return `both`;
  if (!vowels && !consonants) return `neither`;
  if (vowels) return `vowel`;
  if (consonants) return `consonant`;
}

function checkPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(palindrome("egg"));//, "both");
console.log(palindrome("raCe car"));//, "both");
console.log(palindrome("wizard"));//, "neither");
console.log(palindrome("pea13ce"));//, "vowel");
console.log(palindrome(" *73_ ab"));//, "both");
console.log(palindrome("3-B0oto b"));//, "both");
console.log(palindrome("_inte 4"));//, "neither");
console.log(palindrome("neither"));//, "vowel");