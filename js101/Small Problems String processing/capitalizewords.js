// function wordCap(string) {
//   return string.split(' ').map(word => {
//     word = word.toLowerCase().split('');
//     word[0] = word[0].toUpperCase();
//     return word.join('');
//   }).join(' ');
// }

// function wordCap(string) {
//   return string.split(' ').map(word => {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// }

function wordCap(string) {
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'