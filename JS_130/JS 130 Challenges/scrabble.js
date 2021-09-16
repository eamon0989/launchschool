class Scrabble {
  static points = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    let score = 0;
    if (!this.word) return 0;

    this.word.split('').forEach(char => {
      for (let prop in Scrabble.points) {
        if (prop.includes(char.toUpperCase())) {
          score += Scrabble.points[prop];
        }
      }
    });

    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;
