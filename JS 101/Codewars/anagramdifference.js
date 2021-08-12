/*
Given two words, how many letters do you have to remove from them to make
them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually
  in a different order).
Do not worry about case. All inputs will be lowercase.

Input: 2 strings
Output: number

Rules:
return the total amount of letters that need to be removed
only lowercase

Algorithm:
 - iterate over the first string, remove any letters not present
     in string 2 and push them to an array
 - iterate over the second string, remove any letters not present in
     string 1 and push them to the array
 - return array.length

*/
function anagramDifference(word1, word2) {
  let removed1 = removeLetters(word2, word1);
  let removed2 = removeLetters(word1, word2);
  return removed1 + removed2;
}

function removeLetters(string, otherWord) {
  let array = [...otherWord];
  let present = [...string].filter(char => {
    if (array.includes(char)) {
      array.splice(array.indexOf(char), 1);
      return true;
    } else {
      return false;
    }
  });
  return string.length - present.length;
}

console.log(anagramDifference("codewars","hackerrank"));