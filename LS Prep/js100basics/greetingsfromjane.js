let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: name => console.log(`Hej, ${name}!`),
};

jane.greet('Bobby'); // Hej, Bobby!