function dms(num) {
  if (num < 0) {
    while (num < 0) {
      num = 360 + num;
    }
  } else if (num > 360) {
    while (num > 360) {
      num -= 360;
    }
  }

  let degrees = Math.floor(num);
  let minutes = (num - degrees) * 60;
  let seconds = String(Math.floor((minutes - Math.floor(minutes)) * 60));
  minutes = String(Math.floor(minutes));

  minutes = add0(minutes);
  seconds = add0(seconds);

  return `${degrees}˚${minutes}'${seconds}"`;

}

function add0(string) {
  if (string.length < 2) {
    return `0${string}`;
  }
  return string;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
console.log(dms(740)); // 20°00'00"