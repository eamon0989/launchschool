/*
Rules:
meetups are monthly
case insensitive

Descriptors:
'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'
Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'

Obj props:
month num
year

Methods:
toString
day - determine the exact date of the meeting in the specified
month and year

Algorithm:
month = month - 1
find first monday in month 3 of 2013
first monday in month 4 of 2013
first tuesday in month 5 of 2013
loop through the days of the month until you find the correct day
keep track of how many 'mondays' you pass

day: arguments day and descriptor
initialize a new date object on the first day of the month
check if the day string matches the string at that index of the days array
if not iterate until a match is found
if descriptor = first, return the first match
if second, the second etc

*/

"use strict";

function dateAsString(year, month, day) {
  let date = new Date(year, month - 1, day);
  return date.toString();
}


class Meetup {
  constructor(year, month) {
    this.month = month;
    this.year = year;
    this.lastDayOfMonth = new Date(this.year, this.month, 0).getDate();
  }

  static days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  static teens = {
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true,
    19: true,
  }

  day(day, descriptor) {
    if (descriptor.toLowerCase() === 'last') return this.lastDay(day);

    let descriptors = ['empty', 'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'];
    let count = 0;
    let dayOfMonth = 1;
    let date = new Date(this.year, this.month - 1, dayOfMonth);

    while (dayOfMonth <= this.lastDayOfMonth) {
      date = new Date(this.year, this.month - 1, dayOfMonth);

      if (Meetup.days[date.getDay()] === day.toLowerCase()) {
        count += 1;
      }

      if (descriptor.toLowerCase() === 'teenth') {
        if (Meetup.days[date.getDay()] === day.toLowerCase() &&
          Meetup.teens[dayOfMonth]) {
          return date;
        }
      }

      if (Meetup.days[date.getDay()] === day.toLowerCase() &&
      count === descriptors.indexOf(descriptor.toLowerCase())) {
        return date;
      }
      if (dayOfMonth === this.lastDayOfMonth) return null;

      dayOfMonth += 1;
    }


    return date;
  }

  lastDay(day) {
    let dayOfMonth = this.lastDayOfMonth;
    let date = new Date(this.year, this.month - 1, dayOfMonth);

    while (dayOfMonth > 0) {
      date = new Date(this.year, this.month - 1, dayOfMonth);

      if (Meetup.days[date.getDay()] === day.toLowerCase()) {
        return date;
      }
      dayOfMonth -= 1;
    }
  }

  teenth() {

  }
}

let meetup = new Meetup(2015, 2);
let expected = dateAsString(2015, 2, 22);
console.log(meetup.day('Sunday', 'last').toString());
console.log(expected);

module.exports = Meetup;