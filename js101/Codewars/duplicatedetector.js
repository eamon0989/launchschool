function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .filter((char,index, array) => {
      return index !== array.lastIndexOf(char);
    })
    .join('');
}

console.log(duplicateEncode("din"));// ,"(((");
console.log(duplicateEncode("recede"));// ,"()()()");
console.log(duplicateEncode("Success"));// ,")())())","should ignore case");
console.log(duplicateEncode("(( @"));// ,"))((");
console.log(duplicateEncode('(@v@@c@T@)@@ye'));// ,"()())()()())((");
console.log(duplicateEncode(' ( ( )'));// ,')))))(';