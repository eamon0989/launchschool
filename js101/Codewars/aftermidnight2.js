/*
Input: time represented by a string
Output: num

Rules:
count the amount of hours and minutes, return the amount of minutes
  after midnight
must be a number between 0 and 1439
1440 === 0

Algorithm:
  - split the input on the colon
  - coerce the 2 values to numbers
  - multiply the first value by 60 and add it to the second
  - return the sum

*/
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

function afterMidnight(time) {
  if (time === '00:00') return 0;
  if (time === '24:00') return 0;
  let array = time.split(':').map(Number);
  let minutes = (array[0] * MINUTES_PER_HOUR) + array[1];
  return minutes;
}

function beforeMidnight(time) {
  if (time === '00:00') return 0;
  if (time === '24:00') return 0;
  let array = time.split(':').map(Number);
  let minutes = (array[0] * MINUTES_PER_HOUR) + array[1];
  minutes = MINUTES_PER_DAY - minutes;
  return minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);