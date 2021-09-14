function triangle(stars) {
  for (let spaces = stars - 1; spaces >= 0; spaces -= 1) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars - spaces)}`)
  }
}

triangle(5);

// *
// **
// ***
// ****
// *****

triangle(9);

//     *
//    **
//   ***
//  ****
// *****
// ******
// *******
// ********
// *********