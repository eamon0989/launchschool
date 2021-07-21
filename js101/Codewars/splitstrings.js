function solution(string) {
  let array = (string + '_').match(/(.{2})/g) || [];
  return array;
}

console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']