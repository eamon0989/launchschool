class Dna {
  constructor(strand) {
    this.dna = strand;
  }

  hammingDistance(distance) {
    let length = Math.min(distance.length, this.dna.length);

    let differences = 0;
    for (let charIdx = 0; charIdx < length; charIdx += 1) {
      if (this.dna[charIdx] !== distance[charIdx]) {
        differences += 1;
      }
    }

    return differences;
  }
}

module.exports = Dna;