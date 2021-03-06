/*
Input: letter
Ouput: diamond
rules:
A returns 'a'
C returns
"  A  \n"
" B B \n"
"C   C\n"
" B B \n"
"  A  \n"
B adds 1 space
C adds 3 spaces
D adds 5 spaces
E adds 7 spaces (total width is 9)
Spaces increment by 2 each time

    A     0(4 spaces, A, 4 spaces)
   B B    1(3 spaces, B, 1 space, C, 3 spaces)
  C   C   2(2 spaces, C, 3 spaces, C, 2 spaces)
 D     D  3(1 space, D, 5 spaces, D 1 space)
E       E 4(9, 7 spaces)
 D     D
  C   C
   B B
    A

     A     0(4 spaces, A, 4 spaces)
    B B    1(3 spaces, B, 1 space, C, 3 spaces)
   C   C   2(2 spaces, C, 3 spaces, C, 2 spaces)
  D     D  3(1 space, D, 5 spaces, D 1 space)
 E       E 4(9, 7 spaces)
F         F
 E       E
  D     D
   C   C
    B B
     A
Inside space = index + (index - 1)

For each letter, add another space outside, 2 spaces inside, another outside

*/

class Diamond {
  static letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let array = [];
    if (letter === 'A') return 'A\n';

    let spaces = (this.letters.indexOf(letter) * 2) - 1;
    let middleRow = Diamond.createMiddleRow(letter, spaces);
    let firstRow = Diamond.createFirstRow(spaces);

    array.push(firstRow);
    Diamond.addInnerRows(spaces, letter, array);
    array.push(middleRow);
    array.push(...array.slice(0, array.length - 1)
      .reverse());

    return array.join('\n') + '\n';
  }

  static addInnerRows(spaces, letter, array) {
    let innerSpaces = 1;
    let outerSpaces = (spaces - innerSpaces) / 2;

    for (let index = 1; index < Diamond.letters.indexOf(letter); index += 1) {
      array.push(`${' '.repeat(outerSpaces)}${
        Diamond.letters[index]}${' '.repeat(innerSpaces)}${
        Diamond.letters[index]}${' '.repeat(outerSpaces)}`);

      innerSpaces += 2;
      outerSpaces -= 1;
    }
  }

  static createMiddleRow(letter, spaces) {
    return `${letter}${' '.repeat(spaces)}${letter}`;
  }

  static createFirstRow(spaces) {
    return `${' '.repeat(Math.ceil(spaces / 2))}A${' '.repeat(Math.ceil(spaces / 2))}`;
  }
}

module.exports = Diamond;