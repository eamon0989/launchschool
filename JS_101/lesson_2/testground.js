const SHORT_ANSWERS = {
  r:  ['rock'],
  p:  ['paper'],
  sc: ['scissors'],
  l:  ['lizard'],
  sp: ['spock'],
};

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  return WINNING_COMBOS[choice].includes(computerChoice);
  

  if (SHORT_ANSWERS[choice]) {
    choice = SHORT_ANSWERS[choice];
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  return choice;
}