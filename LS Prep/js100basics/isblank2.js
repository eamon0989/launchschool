function isBlank(string) {
  return string.trim().length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true