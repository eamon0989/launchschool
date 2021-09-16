function repeat(num, str) {
  let string = '';
  for (let i = 0; i < num; i += 1){
    string += str;
  }
  return string;
}

repeat(3, 'ha'); // 'hahaha'