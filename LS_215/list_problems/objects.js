
// let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
// let counts = names.reduce((obj, word) => {
//   obj[word[0]] ? obj[word[0]] += 1 : obj[word[0]] = 1;
//   return obj;
// }, {})

// // let letter = Object.keys(counts).reduce((lastLetter, currentLetter) => {
// //   if (counts[lastLetter] > counts[currentLetter]) {
// //     return lastLetter;
// //   } else {
// //     return currentLetter;
// //   }
// // });
// let letter = ''

// for (let prop in counts) {
//   if (!letter) letter = prop;

//   if (counts[prop] > counts[letter]) {
//     letter = prop;
//   }
// }

// console.log(letter);

// let myObject = { a: 1, b: 2, c: 3 };

// Object.keys(myObject).forEach(key => {
//   console.log('key: ' + key + ', value: ' + String(myObject[key]));
// });

// logs
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3

// letter is "K"

// map to a new object with values doubled from myObject
function doubleObjectValues(object) {
  let newObject = {};
  Object.keys(object).forEach(key => newObject[key] = object[key] * 2); // side effect
  return newObject;
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 }));        // { a: 2, b: 4, c: 6 }