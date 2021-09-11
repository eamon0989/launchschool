let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  let longest = '';
  let sentences = text.match(/\w.*?[!?.]/g);

  sentences.forEach(sentence => {
    if (!longest) longest = sentence;

    if (sentence.split(' ').length >
      longest.split(' ').length) {
      longest = sentence;
    }
  })

  let words = longest.split(' ').length;
  let result = `The longest sentence has ${words} ${words > 1 ? 'words' : 'word'}.`;
  console.log(longest);
  console.log(result);
}

function longestSentence(text) {
  let strings = text.split(/([!?.])/);
  let longest = '';

  for (let i = 0; i < strings.length; i += 2) {
    let sentence = strings[i].concat(strings[i + 1]).trim();

    if (!longest) longest = sentence;

    if (sentence.split(' ').length >
      longest.split(' ').length) {
      longest = sentence;

    }
  }

  let words = longest.split(' ').length;
  let result = `The longest sentence has ${words} ${words > 1 ? 'words' : 'word'}.`;
  console.log(longest);
  console.log(result);
}

longestSentence(longText);
longestSentence("To be or not to be? The brown fox is superlative!");
// => actual
//    The brown fox is superlative! (5 words)
// => expected
//    To be or not to be? (6 words)
longestSentence("I!");

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// console.log(longestSentence(longText));

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.