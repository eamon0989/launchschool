// for (let i = 2; i < 100; i += 2) {
//   console.log(i)
// }

for (let i = 1; i < 100; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}