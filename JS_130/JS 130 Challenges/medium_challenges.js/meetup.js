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

class Meetup {
  constructor(year, month) {
    this.month = month;
    this.year = year;
    this.lastDayOfMonth = new Date(this.year, this.month, 0).getDate();
    this.setLastWeek();
  }

  static FIRST_POSSIBLE_DAY = {
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    fifth: 29,
    last: undefined,
    teenth: 13,
  };

  static DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


  day(weekday, descriptor) {
    let dayOfMonth = Meetup.FIRST_POSSIBLE_DAY[descriptor.toLowerCase()];

    while (dayOfMonth <= (this.lastDayOfMonth || dayOfMonth + 6)) {
      let date = new Date(this.year, this.month - 1, dayOfMonth);

      if (Meetup.DAYS[date.getDay()] === weekday.toLowerCase()) {
        return date;
      }

      dayOfMonth += 1;
    }

    return null;
  }

  setLastWeek() {
    Meetup.FIRST_POSSIBLE_DAY.last = this.lastDayOfMonth - 6;
  }
}

module.exports = Meetup;