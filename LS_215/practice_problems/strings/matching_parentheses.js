function isBalanced(string) {
  let parentheses = string.match(/[()]/g);
  if (parentheses === null) return true;

  let count = 0;
  let index = 0;
  while (index < parentheses?.length) {
    if (parentheses[index] === '(') {
      count += 1;
    } else if (parentheses[index] === ')') {
      count -= 1;
    }

    if (count < 0) return false;
    index += 1;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false