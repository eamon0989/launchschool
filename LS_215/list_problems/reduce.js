function add(previousValue, element) {
  console.log(previousValue, element);
  return previousValue + element;
}

let count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));            // 15