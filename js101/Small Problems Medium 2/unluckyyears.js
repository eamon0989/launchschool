/* Some people believe that Fridays that fall on the 13th day of the month
are unlucky days. Write a function that takes a year as an argument and returns
the number of Friday the 13ths in that year. You may assume that the year is
greater than 1752, which is when the United Kingdom adopted the modern Gregorian
Calendar. You may also assume that the same calendar will remain in use for the
foreseeable future.


year = new Date(1986, 1, 1)
const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(),
  date.getFullYear()];
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6 // thursday === 5

const date1 = birthday.getDate();
Return value
An integer number, between 1 and 31, representing the day of the month
for the given date according to local time.

let options = { weekday: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// Monday
Examples: */

const MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function fridayThe13ths(year) {

  return MONTHS.reduce((acc, month) => {

    if (new Date(year, MONTHS.indexOf(month), 13).getDay() === 5) {
      acc += 1;
    }

    return acc;
  }, 0);
}

// function fridayThe13ths(year) {
//   return [...Array(12)].filter((_, index) =>
//     new Date(year, index, 13).getDay() === 5).length;
// }

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2