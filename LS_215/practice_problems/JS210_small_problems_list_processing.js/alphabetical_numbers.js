// const numWords = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'.split(' ').sort();

// const converter = {
//   0: 'zero', 
//   1: 'one', 
//   2: 'two', 
//   3: 'three', 
//   4: 'four', 
//   5: 'five', 
//   6: 'six', 
//   7: 'seven', 
//   8: 'eight', 
//   9: 'nine', 
//   10: 'ten', 
//   11: 'eleven', 
//   12: 'twelve', 
//   13: 'thirteen', 
//   14: 'fourteen', 
//   15: 'fifteen', 
//   16: 'sixteen', 
//   17: 'seventeen', 
//   18: 'eighteen', 
//   19: 'nineteen'
// }

// function alphabeticNumberSort(array) {
//   return array.slice().map(num => converter[num]).sort().map(word => {
//     for (let prop in converter) {
//       if (converter[prop] === word) {
//         return prop;
//       }
//     }
//   });
// }

function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/*
Input: array of numbers
Output: new array sorted by alphabetical sorting

Rules:
do not mutate the argument
nums from 0 to 19

Algorithm:
Create an object with numbers that converts them to words
replace the numbers with the words
sort the words
convert them back to numbers
*/