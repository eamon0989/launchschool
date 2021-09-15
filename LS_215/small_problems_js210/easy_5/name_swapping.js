function swapName(string) {
  return string.replace(/(\w+)(\s)(\w+)/gi, '$3,$2$1');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"