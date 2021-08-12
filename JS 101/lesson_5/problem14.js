let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let returnArr = Object.values(obj).map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => {
      return capitalize(color);
    });
  } else if (obj.type === 'vegetable') {
    return obj.size.toUpperCase();
  }
});
console.log(returnArr);
