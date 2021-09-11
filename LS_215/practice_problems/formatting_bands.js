/*
Rules: remove all dots from band names
Capitalize all band name words
country should be canada
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(obj => {
    changeCountry(obj);
    obj.name = removeDots(obj.name);
    obj.name = capitalize(obj.name);
    return obj;
  })
}

function changeCountry(obj) {
  obj.country = 'Canada';
  return obj;
}

function removeDots(string) {
  return string.replace('.', '');
}

function capitalize(string) {
  return string.replace(/\b[a-z]/g, (match) => match.toUpperCase());
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

// No side effects:

// function processBands(bands) {
//   return bands.map(band => {
//     let capitalizedName = capitalizePhrase(band.name);
//     let newBandName = removeDotsInString(capitalizedName);

//     return {
//       name: newBandName,
//       country: 'Canada',
//       active: band.active,
//     };
//   });
// }

// function capitalizePhrase(phrase) {
//   return phrase.split(' ')
//                .map(word => capitalizeString(word))
//                .join(' ');
// }

// function capitalizeString(string) {
//   let initial = string[0].toUpperCase();
//   let rest = string.slice(1, string.length);
//   return initial + rest;
// }

// function removeDotsInString(string) {
//   return string.replace(/\./g, '');
// }