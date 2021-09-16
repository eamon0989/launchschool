/* - check if number is greater than 60, if so divide by 60 = hours
- get the decimal of the remainder and multiply it by 60 = minutes
- add or subtract hours from 00 or 24 to get the hours
- add or subtract minutes from 00 or 60 to get the minutes
- return the result as a string */

// function timeOfDay(num) {
//   let array;
//   if (num === 0) {
//     return '00:00';
//   } else if (num > 0) {
//     array = positiveNums(num);
//   } else if (num < 0) {
//     array = negativeNums(num);
//   }
//   // console.log(`${array}`);
//   return `${array[0]}:${array[1]}`;
// }

// function positiveNums(num) {
//   let hours;
//   let minutes;
//   if (num > 60) {
//     hours = num / 60;

//     while (hours >= 24) {
//       hours -= 24;
//     }

//     minutes = (hours - Math.floor(hours)) * 60;
//     minutes = add0(Math.floor(minutes));
//     hours = add0(Math.floor(hours));

//     return [hours, minutes];
//   } else {
//     hours = '00';
//     minutes = num;

//     return [hours, minutes];
//   }
// }

// function negativeNums(num) {
//   let hours = 23;
//   let minutes = 60;

//   if (num < -60) {
//     hours = num / 60;

//     while (hours <= -1) {
//       hours += 24;
//     }

//     minutes = (hours - Math.floor(hours)) * 60;
//     minutes = add0(Math.floor(minutes));
//     hours = add0(Math.floor(hours));

//     return [hours, minutes];

//   } else {
//     hours = '23';
//     minutes = (60 + num);

//     return [hours, minutes];
//   }
// }

// function add0(num) {
//   let string = String(num);
//   if (string.length < 2) {
//     string = '0' + string;
//   }

//   return string;
// }

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(totalMinutes) {
  if (totalMinutes < 0) {
    totalMinutes = (totalMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    totalMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(totalMinutes / MINUTES_PER_HOUR);
  let minutes = (totalMinutes % MINUTES_PER_HOUR);

  return formatTime(hours, minutes);
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");