/*
Backspaces in string
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

----------------------------------------------------------------


Input: string
Output: string

Rules: remove 1 char before #
for x number of # in a row, remove x number of chars before them

Algorithm;
 - split my sting into an array of chars
 - while the array includes #, keep iterating over the array
   - on each iteration, find the first hash, change it and the char before it to false
   - filter out false values, repeat until finished
 - return the remaining chars as a string


 0 1 2 3 4 5
 a b c # # #

ac
*/

function cleanString(string) {
	let array = [...string];

  while (array.includes('#')) { 
    let index = array.indexOf('#');
    array[index] = false;
    array[index - 1] = false;
    array = array.filter(char => char !== false);
  }

  return array.join('');
};

// function cleanString(s) {
//   if (s.length === 0) return s;
//   const HASH_SYMBOL = "#";
//   while (s.includes(HASH_SYMBOL)) {
//     s = s.split('');
//     let deleteIndex = s.indexOf(HASH_SYMBOL);
//     if (deleteIndex === 0) {
//       s.splice(deleteIndex, 1);
//     } else {
//       s.splice(deleteIndex - 1, 2);
//     }
//     s = s.join('');
//   }
//   return s;
// }



console.log(cleanString('abc####d##c#'));  // ==>  ""
console.log(cleanString("abc#d##c"));      // ==>  "ac"
console.log(cleanString("abc##d######"));  // ==>  ""
console.log(cleanString("#######"));       // ==>  ""
console.log(cleanString(""));              // ==>  ""
console.log(cleanString("fjnwui#NI#(*N#ION#Onfjen################Io4f"));             
// ==>  "Io4f"
console.log(cleanString("hsk48hjjdfgd"));             
// ==>  "hsk48hjjdfgd"