/* Your task is to Reverse and Combine Words. It's not too difficult,
but there are some things you have to consider...

So what to do?
Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second,
third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...
Some easy examples:
Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"
I think it's clear?! First there are some static tests, later on random
tests too...

Input: string
Output: string

Rules:
a word is separated by spaces
if there is only one word, return the string
if there are 2 words or more, reverse each word and then join the
   1st and second strings together without spaces in the same order
   the 3rd and 4th, 5th and 6th etc
repeat the process until there are no spaces

Human solution:
Take the first 2 words, reverse them and join them together.
Take the next 2 words, repeat
Leave the last odd word on it's own, but reverse it

Algorithm:
  - initialize an empty array
  - initialize a count variable to 0
  - initialize an empty string
  - iterate over the string and push each 'pair' to a subarray in the array
      spliting a pair every second space
  - iterate over the array, split each string on the space, reverse both words
      join them back together
  - return the array as a string separated by spaces
  - repeat the process until there are no more spaces


*/

function reverseAndCombine(string) {
  let array = [];
  let count = 0;
  let currentString = '';

  if (string.split(' ').length === 1) {
    return string;
  }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (/\s/.test(char)) {
      count += 1;
      if (count % 2 === 0) {
        array.push([currentString]);
        currentString = '';
      }
    }

    currentString += char;

    if (index === string.length - 1) {
      array.push([currentString]);
    }
  }

  array = array.map(sub => sub.map(string => {
    return string.split(' ').map(word => word.split('').reverse().join('')).join('')
  }))

  string = flatten(array).join(' ');
  let spaces = string.match(/\s/) || [];

  while (spaces.length > 0) {
    return reverseAndCombine(string);
  }
  return string;
}

function flatten(array) {
  let flattened = [];
  array.forEach(sub => flattened.push(sub[0]));
  return flattened;
}

console.log(reverseAndCombine("abc def")); //, "cbafed")
console.log(reverseAndCombine("abc def ghi jkl")); //, "defabcjklghi")
console.log(reverseAndCombine("dfghrtcbafed")); //, "dfghrtcbafed")
console.log(reverseAndCombine("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")); //, "trzwqfdstrteettr45hh4325543544hjhjh21lllll")
console.log(reverseAndCombine("sdfsdf wee sdffg 342234 ftt")); //, "gffds432243fdsfdseewttf")