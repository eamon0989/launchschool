/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the
input string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Input: String
Output: number

Rules:
case does not matter
only letters and numbers, not symbols
count how many times each letter appears
return the sum of the count of each letter that appears
  MORE than once
if no char appears more than once, return 0

Algorithm:

aabbcde / 2
take each letter, check if the rest of the string contains it.
if it does, push that letter to an array and replace all instances
of the letter with an empty string
if it doesn't
return the length of the array

*/

function duplicateCount(string) {
  let unique = [];
  let chars = [...string.toLowerCase().replace(/\d/gi, '')];

  while (chars.length > 0) {
    let char = chars.shift();
    if (chars.includes(char)) {
      let regex = new RegExp(char, 'gi');
      // console.log(char, chars);
      chars = chars.join('').replace(regex, '').split('');
      unique.push(char);
    }
  }

  return unique.length;
}

console.log(duplicateCount("Indivisibilities"));