// let fibNums = [0, 1, 1, 2];

// function fibonnacci(nth) {
//   // if (nth <= 2) return 1;
//   fibNums[nth] = fibNums[nth] || fibonnacci(nth - 1) + fibNums[nth - 2];

//   return fibNums[nth];
// }

// console.log(fibonnacci(10));

let fibNums = [0, 1, 1, 2];

function fibonnacci(nth) {
  if (nth <= 2) return 1;
  if (fibNums[nth]) {
    return fibNums[nth];
  } else {
    fibNums[nth] = fibonnacci(nth - 1) + fibNums[nth - 2];
  }
  return fibNums[nth];
}

function selectFibNumbers(array) {
  fibonnacci(50);
  let matches = [];
  array.forEach(num => {
    if (fibNums.includes(num)) {
      matches.push(num);
    }
  });

  return matches;
}

console.log(selectFibNumbers([1, 55, 21334, 4235, 56, 6765, 34]));

// console.log(fibonnacci(10));