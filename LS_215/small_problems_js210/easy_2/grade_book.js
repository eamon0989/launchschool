// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

function getGrade(...args) {
  let avg = [...args].reduce((acc, num) => acc + num) / args.length;
  return returnGrade(avg);
}

function returnGrade(num) {
  if(num >= 90) {
    return 'A';
  } else if (String(num)[0] === '8') {
    return 'B'
  } else if (String(num)[0] === '7') {
    return 'C'
  } else if (String(num)[0] === '6') {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"