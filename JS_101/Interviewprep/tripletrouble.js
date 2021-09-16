function tripledouble(num1, num2) {
  let num1Match = String(num1).match(/(\d)\1{2}/g);
  let num2Match = String(num2).match(/(\d)\1{1}/g) || [];

  return num2Match.some(num => {
    num1Match.forEach(ele => ele.includes(num));
  }) ? 1 : 0;
}

console.log(tripledouble(451999277,41177722899));//,1);
console.log(tripledouble(1222345, 12345));//,0);
console.log(tripledouble(12345, 12345));//,0);
console.log(tripledouble(666789, 12345667));//,1);
console.log(tripledouble(10560002, 100));//,1);
console.log(tripledouble(1112, 122));//,0);