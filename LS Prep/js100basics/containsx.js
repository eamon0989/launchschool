let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function containsX(string) {
  let letter = 'x';
  if (string.includes(letter)) {
    return true;
  }
  return false;
}

console.log(containsX(byteSequence));