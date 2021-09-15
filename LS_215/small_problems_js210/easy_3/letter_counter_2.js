function wordSizes(string) {
  if (!string) return {};
  string = string.replace(/[^a-z ]/gi, '');

  return string.split(' ').reduce((obj, word) => {
    obj[word.length] ? obj[word.length] += 1 : obj[word.length] = 1;
    return obj;
  }, {})
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}