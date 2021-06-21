// input = number
// output = the sum of any number between 1 and the number, inclusive, that's a multiple of 3 or 5

function multisum(num){
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168