const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/* find words, replace them with index from numbers */

function wordToDigit(string) {
  let regex = new RegExp(/\w+/, 'gi');
  string = string.replace(regex, word => {
    if (NUMBERS.includes(word)) {
      return NUMBERS.indexOf(word);
    } else {
      return word;
    }

  });

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));      // "The w8 is d1."