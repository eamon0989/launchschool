/*
Input: float
Output: string representing degrees, minutes, seconds

Rules:
multiply 60 by the float to get the minutes
if result is a float, multiply 60 by the float to get the seconds

*/

function dms(float) {
  let degrees = Math.floor(float);
  let minutes = 60 * (float - Math.floor(float));
  let seconds = 60 * (minutes - Math.floor(minutes));

  minutes = Math.floor(minutes) || '00';
  seconds = Math.floor(seconds) || '00';

  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"