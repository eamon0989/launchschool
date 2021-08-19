class BeerSong {
  constructor() {
    this.lyrics = {
      0: "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n",
      1: "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles of beer on the wall.\n\n",
    };

    for (let verse = 2; verse < 100; verse += 1) {
      this.lyrics[verse] = `${verse} bottle of beer on the wall, ${verse} bottle of beer.\n` +
      `Take it down and pass it around, ${verse - 1} more bottles of beer on the wall.\n\n`;
    }
  }

  static verse() {}

  static verses() {}

  static lyrics() {}
}

let song = new BeerSong();
console.log(song.lyrics[33]);