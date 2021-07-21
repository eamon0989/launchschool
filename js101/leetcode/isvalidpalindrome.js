let isPalindrome = function(string) {
  string = string.replace(/[\W_]/gi, '');

  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start].toLowerCase() !== string[end].toLowerCase()) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
