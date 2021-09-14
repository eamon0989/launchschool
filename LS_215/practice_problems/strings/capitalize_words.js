// function wordCap(string) {
//   return string.toLowerCase()
//     .replace(/("\w)|(\b\w)/g, (_, p1, p2) => p1 ? p1 : p2.toUpperCase());
// }

function wordCap(string) {
  return string.toLowerCase()
    .replace(/\b\w(?!\w+")/g, match => match.toUpperCase());
}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
// console.log(wordCap(`this is a 'quoted' word`));    // 'This Is A "quoted" Word'


