function findOutlier(array) {
  return array.filter(num => num % 2 === 0).length === 1 ? array
    .filter(num => num % 2 === 0)[0] : array.filter(num => num % 2 !== 0)[0];
}

console.log(findOutlier([-177874902, 4792570,
  -181188269, -77881892, -144846768]));
