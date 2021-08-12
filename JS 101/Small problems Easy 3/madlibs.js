/* Ask the user for input, 4 words
store user input in 4 variables
declare 4 string variables and write the return sentences in them,
using template literals to insert the user words in specific spots

e.g. Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!
The ${adj} ${noun} ${verb} ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb} up ${adj} Joe's turtle. */

const rlsync = require('readline-sync');

function madLibs() {
  let verb = rlsync.question('Write a verb: ');
  let adj = rlsync.question('Write an adjective: ');
  let adv = rlsync.question('Write an adverb: ');
  let noun = rlsync.question('Write a noun: ');

  return console.log(`
  Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!
  The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.
  The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle. */`);
}

madLibs();