function ranger(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return ranger(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));