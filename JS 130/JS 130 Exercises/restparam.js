function sum(...args) {
  // values = Array.prototype.slice.call(arguments);

  return args.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16