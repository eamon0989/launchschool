class BeerSong {
  static lyricsObj = {
    0: "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n",
    1: "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer on the wall.\n",
    2: "2 bottles of beer on the wall, 2 bottles of beer.\n" +
    "Take one down and pass it around, 1 bottle of beer on the wall.\n",
  }

  static initializeVerses() {
    for (let verse = 3; verse < 100; verse += 1) {
      this.lyricsObj[verse] = `${verse} bottles of beer on the wall, ${verse} bottles of beer.\n` +
      `Take one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`;
    }
  }

  static verse(num) {
    if (!BeerSong.lyricsObj[3]) BeerSong.initializeVerses();
    return BeerSong.lyricsObj[num];
  }

  static verses(num1, num2) {
    let verses = [];
    for (let index = num1; index >= num2; index -= 1) {
      verses.push(BeerSong.verse(index));
    }

    return verses.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;