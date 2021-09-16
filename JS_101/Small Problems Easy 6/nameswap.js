// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// function swapName(name) {
//   let names = name.split(' ');
//   let surname = names.pop() + `,`;
//   names.unshift(surname);
//   return names.join(' ');
// }

function swapName(name) {
  let names = name.split(' ');
  return `${names.pop()}, ${names.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName(`Eamon O'Callaghan`));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"