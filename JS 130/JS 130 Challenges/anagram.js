class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(array) {
    let sortedWord = this.word.toLowerCase().split('').sort().join('');

    return array.filter(word => {
      let currentSortedWord = word.toLowerCase().split('').sort().join('');

      return ((currentSortedWord === sortedWord) &&
        (this.word.toLowerCase() !== word.toLowerCase()));
    });
  }
}

let detector = new Anagram('Orchestra');
let anagrams = detector.match(['cashregister', 'Carthorse', 'radishes']);
console.log(anagrams);
//expect(anagrams).toEqual(['Carthorse'])

module.exports = Anagram;