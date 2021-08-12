function centerOf(string) {
  let even = string.length % 2 === 0;
  let center = string.length / 2;

  return even ? string.slice(center - 1, center + 1) :
    string.slice(center, center + 1);
}

// function centerOf(string) {
//   let even = string.length % 2 === 0;
//   let center = even ? string.length / 2 : Math.floor(string.length / 2);

//   return even ? string.slice(center - 1, center + 1) :
//     string.slice(center, center + 1);
// }

// const centerOf = (string) => string.slice((string.length - 1) /
  // 2, string.length / 2 + 1);


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"