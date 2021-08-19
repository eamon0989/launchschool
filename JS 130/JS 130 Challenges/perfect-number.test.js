let PerfectNumber = require('./perfect-number.js');

describe("PerfectNumber", () => {
  test("negative raises error", () => {
    expect(() => { PerfectNumber.classify(-1) }).toThrow();
  });

  xtest("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual('deficient');
  });

  xtest("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual('perfect');
  });

  xtest("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual('abundant');
  });
});