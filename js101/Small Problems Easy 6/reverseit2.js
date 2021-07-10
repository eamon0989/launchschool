function reverseWords(string) {
  return string.split(' ')
    .map(word => (word.length > 4 ? word.split('').reverse().join('') : word))
    .join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"