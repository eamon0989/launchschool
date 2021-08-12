// function greet(code) {
//   if (code === 'en') {
//     return 'Hi!';
//   } else if (code === 'fr') {
//     return 'Salut!';
//   } else if (code === 'pt') {
//     return 'olá!';
//   } else if (code === 'de') {
//     return 'Hallo!';
//   } else if (code === 'sv') {
//     return 'Hej!';
//   } else if (code === 'af') {
//     return 'Haai!';
//   }
// }

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}


greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'