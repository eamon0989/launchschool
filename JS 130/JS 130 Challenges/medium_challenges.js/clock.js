/*
Input: hours or minutes
Output: clock time

data structures:
need to hold hours and minutes, array?

minutes per day = 1440;
more than 1440 minutes resets to new day
*/

class Clock {

  constructor() {
    this.time = [];
  }

  toString() {
    if (this.time[1] < 0) this.updateClockNegative();
    this.updateClock();

    this.time = this.time.map(String);

    if (this.time[0].length < 2) this.time[0] = '0' + this.time[0];
    if (this.time[1].length < 2) this.time[1] = '0' + this.time[1];
    return `${this.time.join(':')}`;
  }

  updateClock() {
    while (this.time[1] > 60) {
      this.time[1] -= 60;
      this.time[0] += 1;
    }

    while (this.time[0] > 23) {
      this.time[0] -= 24;
    }

    return this;
  }

  updateClockNegative() {
    if (this.time[1] < 0) {
      while (this.time[1] < 0) {
        this.time[1] += 60;
        this.time[0] -= 1;
      }

      while (this.time[0] < 0) {
        this.time[0] += 24;
      }
    }
  }

  static at(hours, minutes) {
    let clock = new Clock();
    clock.time[0] = hours;
    clock.time[1] = minutes || '00';

    return clock;
  }

  add(minutes) {
    if (this.time[1] === '00') {
      this.time[1] = minutes;
    } else {
      this.time[1] += minutes;
    }

    return this;
  }

  subtract(minutes) {
    if (this.time[1] === '00') {
      this.time[1] = -minutes;
    } else {
      this.time[1] -= minutes;
    }

    return this;
  }

  isEqual(clock2) {
    return this.time.toString() === clock2.time.toString();
  }
}

module.exports = Clock;