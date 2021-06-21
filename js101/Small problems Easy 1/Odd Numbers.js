// for (let i = 1; i < 100; i += 2) {
//   console.log(i)
// }

function oddNums(start, end) {
  if (start >= end) {
    return;
  }

  if (start % 2 === 0) {
    start += 1;
  }

  console.log(start)
  return oddNums(start + 2, end);
}

oddNums(-20, 99)
oddNums(33, 29)