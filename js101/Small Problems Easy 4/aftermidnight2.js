const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(string) {
  let [hours, minutes] = string.split(':').map(Number);
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;
  return totalMinutes % MINUTES_PER_DAY;
}

function beforeMidnight(string) {
  let [hours, minutes] = string.split(':').map(Number);
  let totalMinutes = (hours * MINUTES_PER_HOUR) + minutes;
  return totalMinutes === 0 ? 0 : Math.abs(totalMinutes - MINUTES_PER_DAY);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);