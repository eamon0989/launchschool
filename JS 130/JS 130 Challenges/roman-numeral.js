/*
i 1
ii 2
iii 3
iv 4
v 5
vi 6
vii 7
viii 8
ix 9
x 10
xx = 20
xxx = 30
xl = 40
l = 50
lx = 60
lxx = 70
lxxx = 80
cx = 90
c = 100
ccc = 300
cd = 400
d = 500
dc = 600
dcc = 700
dccc 800
cm = 900
m = 1000
mm = 2000
mmm = 3000

1990 = m + cm + cx
2008 = mmvii
2019 = mmxix

2019 = 2000 + 000 + 10 + 9
*/

class RomanNumeral {
  static digits = [
    ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'],
    ['', 'x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc'],
    ['', 'c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm'],
    ['', 'm', 'mm', 'mmm']
  ];

  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let numStr = String(this.num);
    let roman = '';
    let tens = 0;

    for (let index = numStr.length - 1; index >= 0; index -= 1) {
      let str = RomanNumeral.digits[tens][numStr[index]].toUpperCase();
      tens += 1;
      roman = str + roman;
    }

    return roman;
  }
}

module.exports = RomanNumeral;