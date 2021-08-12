/*
Input: number
Output:String

Rules:
number represents minutes
negative means minutes before midnight
positive means minutes after midnight
one day is 24 hours, one hour 60 minutes
one day is equal to 1440 minutes

Algorithm:
  - initialize an array to store hours and minutes
  - if num is greater than 1440, subtract 1440 until num
      is less than 1440
  - divide num by 60 to find the amount of hours
  - remainder num by 60 to find the minutes
  - if num is 0, return 00:00
  - if num is positive, clock starts at 00:00
  - if negative, subtract num from 1440 to make it possitive
  - add hours and minutes to clock
  - return clock time
*/

function timeOfDay(num) {
  if (num === 0) return '00:00';

  while (num < 0) {
    num += 1440;
  }

  while (num > 1440) {
    num -= 1440;
  }

  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  let clock = [hours, minutes];
  clock = addZero(clock);
  let time = `${clock[0]}:${clock[1]}`;
  return time;
}

function addZero(array) {
  return array.map(String).map(str => {
    if (str.length < 2) {
      str = `0${str}`;
    }
    return str;
  });
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");