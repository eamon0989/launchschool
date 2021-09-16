// const negative = num => {
//   if (Object.is(num, -0)) return num;
//   return (num < 0 ? num : num * -1);
// };

const negative = num => -Math.abs(num);

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(-0));     // -0