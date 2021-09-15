function centerOf(string) {
  let center = string.length / 2;
  return center === Math.floor(center) ?
  string.slice(center - 1, center + 1) : string[Math.floor(center)];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"