// Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

function catAge(years) {
  if (years === 0) {
    return 0;
  } else if (years === 1) {
    return 15;
  } else if (years === 2) {
    return 24;
  } else {
    return ((years - 2) * 4) + 24;
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32