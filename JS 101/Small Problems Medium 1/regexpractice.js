let array = ['jim', 'fox', 'dog'];

// function replaceWords(string) {
//   return string.replace(/\w+/gi, word => {
//     return array.includes(word.toLowerCase()) ?
//       'BigMan' : word;
//   });
// }

function replaceWords(string) {
  let regex = new RegExp(`\\b${array.join('\\b|\\b')}\\ `, 'gi');
  return string.replace(regex, match =>
    (array.includes(match.toLowerCase()) ?
      array.indexOf(match.toLowerCase()) : match));
}

console.log(replaceWords('Jim was out walking his dog when he saw a big fox. The dog ran after the fox and killed him. Jim was not happy.'));