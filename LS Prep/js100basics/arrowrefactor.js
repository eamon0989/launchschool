const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.