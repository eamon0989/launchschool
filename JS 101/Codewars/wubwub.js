function songDecoder(string) {
  return string.replace(/(WUB)+/g, ' ').trim();
}

console.log(songDecoder("AWUBBWUBC"));// "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("WEWUBWUBWUBAREWUBTHEWUBCHAMPIONSWUB"));// "A B C","WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));// "A B C","multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"));// "A B C","heading or trailing spaces should be removed");