function wordSizes(string) {
  if (string.trim().length === 0) {
    return {};
  }

  string = string.replace(/[^A-Za-z0-9 ]/gi, '');

  return string.split(' ').reduce((object, word) => {
    let wordLength = word.length;
    if (object.hasOwnProperty(wordLength)) {
      object[wordLength] += 1;
    } else {
      object[wordLength] = 1;
    }

    return object;
  }, {});

}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
