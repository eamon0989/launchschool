let words = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry', 'thirsty', 'hopeful', 'energetic'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat', 'pet', 'foot', 'woman'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats', 'curls'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly', 'stupidly', 'quickly', 'slowly'],
};

const REGEX = new RegExp(/noun|verb|adjective|adverb/, 'gi');

function madlibs(template) {
  return template.replace(REGEX, replacer);
}

function replacer(word) {
  if (word === 'verb') {
    return words.verbs[randomNum(words.verbs)];
  } else if (word === 'adjective') {
    return words.adjectives[randomNum(words.adjectives)];
  } else if (word === 'adverb') {
    return words.adverbs[randomNum(words.adverbs)];
  } else if (word === 'noun') {
    return words.nouns[randomNum(words.nouns)];
  }

  return undefined;
}

function randomNum(array) {
  return Math.floor(Math.random() * array.length);
}

let template1 = `The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around.`;
let template2 = `The noun verb the noun's noun.`;
let template = `The noun verb the noun's noun.`;

console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template));