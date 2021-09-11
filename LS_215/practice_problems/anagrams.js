// function anagram(word, list) {
//   word = word.split('').sort().join('');
//   let anagrams = [];
//   list.slice().map(word => word.split('')
//     .sort().join('')).forEach((ele, index) => {
//       if (word === ele) {
//         anagrams.push(list[index]);
//       }
//     });

//   return anagrams;
// }

// function anagram(word, list) {
//   word = word.split('').sort().join('');

//   return list.reduce((array, string, index) => {
//     if (string.split('').sort().join('') === word) {
//       array.push(string);
//     }

//     return array;
//   }, []);
// }

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// Alternative

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort().join('');
  let targetLetters = target.split('').sort().join('');
  return sourceLetters === targetLetters;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
