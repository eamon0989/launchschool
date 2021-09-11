// function formatDate(string) {
//   return string.split(/\-/).reverse().join('.');
// }

function formatDate(string) {
  return string.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1.$2.$3');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)