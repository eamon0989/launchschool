const linkedOptions = {
  classifications: {
    Vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
    'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
    'Cold-blooded': ['Salmon', 'Turtle'],
    Mammal: ['Bear', 'Whale'],
    Bird: ['Ostrich'],
    Classifications: ['Animals', 'Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  },
  animals: {
    Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Turtle: ['Vertebrate', 'Cold-blooded'],
    Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
    Salmon: ['Vertebrate', 'Cold-blooded'],
    Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
    Animals: ['Classifications', 'Vertebrate', 'Warm-blooded', 'Cold-blooded', 'Mammal', 'Bird'],
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const classification = document.querySelector('#animal-classifications');
  const animal = document.querySelector('#animals');
  const reset = document.querySelector('#clear');

  classification.addEventListener('change', (event) => {
    let selected = event.target.value;

    let options = animal.options;
    options.length = 0;
    linkedOptions.classifications[selected].forEach((animal, index) => {
      options[index] = new Option(animal);
    });
  });

  animal.addEventListener('change', (event) => {
    let selected = event.target.value;

    let options = classification.options;
    options.length = 0;
    linkedOptions.animals[selected].forEach((classification, index) => {
      options[index] = new Option(classification);
    });
  });

  reset.addEventListener('click', e => {
    e.preventDefault();

    let animalOptions = animal.options;
    animalOptions.length = 0;
    linkedOptions.classifications.Classifications.forEach((animal, index) => {
      animalOptions[index] = new Option(animal);
    });

    let classOptions = classification.options;
    classOptions.length = 0;
    linkedOptions.animals.Animals.forEach((classification, index) => {
      classOptions[index] = new Option(classification);
    });
  })
})

