function triangle(...degrees) {
  let array = [...degrees].sort((a, b) => a - b);

  if (array[0] <= 0) return `invalid`;
  if (array.reduce((acc, ele) => acc + ele) !== 180) return `invalid`;

  if (array.some(degrees => degrees === 90)) {
    return `right`;
  } else if (array.some(degrees => degrees > 90)) {
    return `obtuse`;
  } else if (array.every(angle => angle < 90)) {
    return `acute`;
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"