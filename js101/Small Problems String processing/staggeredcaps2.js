// function staggeredCase(string) {
//   return [...string].map((char, index) => {
//     return (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
//   }).join('');
// }

// function staggeredCase(string) {
//   let count = 0;
//   return [...string].map(char => {
//     if (/[a-z]/gi.test(char)) {
//       count += 1;
//       if (count % 2 === 1) {
//         return char.toUpperCase();
//       } else {
//         return char.toLowerCase();
//       }
//     }

//     return char;
//   }).join('');
// }

// function staggeredCase(string) {
//   let needUpper = true;
//   return [...string].map(char => {
//     if (/[a-z]/gi.test(char)) {
//       if (needUpper) {
//         needUpper = false;
//         return char.toUpperCase();
//       } else {
//         needUpper = true;
//         return char.toLowerCase();
//       }
//     }

//     return char;
//   }).join('');
// }

// function staggeredCase(string, onlyCountAlphabetic) {
//   if (onlyCountAlphabetic) {
//     let needUpper = true;
//     return [...string].map(char => {
//       if (/[a-z]/gi.test(char)) {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char.toLowerCase();
//         }
//       }

//       return char;
//     }).join('');
//   }

//   return [...string].map((char, index) => {
//     return (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase());
//   }).join('');
// }

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);