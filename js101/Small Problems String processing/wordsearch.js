// function searchWord(word, string) {
//   let regex = new RegExp (`\\b${word}\\b`, 'gi');
//   let matches = string.match(regex);
//   return matches ? matches.length : 0;
// }

// function countObj(string) {
//   // console.log(string);
//   return string.toLowerCase().split(' ')
//     .reduce((acc,curr) => {
//       acc[curr] = (acc[curr] || 0) + 1;
//       return acc;
//     } ,{});
// }

// function searchWord(word, string) {
//   // console.log(string);
//   let counter = countObj(string);
//   return counter[word] || 0;
// }

// function searchWord(wordToMatch, string) {
//   return string.split(' ').reduce((array, word) => {
//     if (word.toLowerCase().includes(wordToMatch.toLowerCase())) {
//       array.push(word);
//       return array;
//     }

//     return array;
//   }, []).length;
// }

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('sed', 'this short string'));      // 0
console.log(searchWord('qui', text));      // should return 4, NOT 13