/*  - define a function `getGrade`
 - declare variable average and initialize it to the sum of the 3 arguments
     divided by 3
 - if average is between 90 and 100 return A
 - if average is between 80 and 89 return B
 - if average is between 70 and 79 return C
 - if average is between 60 and 69 return D
 - if average is lower than 60 return F */

function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  if (avg > 90) {
    return 'A';
  } else if (avg >= 80 && avg < 90) {
    return 'B';
  } else if (avg >= 70 && avg < 80) {
    return 'C';
  } else if (avg >= 60 && avg < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(5, 50, 9));    // "D"
console.log(getGrade(70, 80, 65));    // "D"
console.log(getGrade(80, 85, 95));    // "D"