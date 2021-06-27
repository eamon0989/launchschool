let rlsync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to our Mortgage Calculator');

// getter function
function getInput() {
  let loanAmount = getLoanAmount();
  let annualPercentageRate = getAnnualPercentageRate();
  let loanDurationMonths = getDuration();
  let monthlyInterestRate = (annualPercentageRate / 100) / 12;
  let monthlyInterestRatePercentage = monthlyInterestRate * 100;
  let monthlyPay = calculateMonthlyPay(annualPercentageRate,
    loanAmount, loanDurationMonths, monthlyInterestRate);
  let totalToPay = monthlyPay * loanDurationMonths;
  let totalInterest = formatNumber(totalToPay - loanAmount);
  totalToPay = formatNumber(totalToPay);
  monthlyPay = formatNumber(monthlyPay);

  printOutput(monthlyPay, loanDurationMonths,
    totalToPay, totalInterest, monthlyInterestRatePercentage);
}

// helper getter functions
function getLoanAmount() {
  let [originalAmount, loanAmount] = askForLoanAmount();

  // if the formated number is not the same as the original, verify with user
  if (loanAmount !== 0 && formatNumber(loanAmount) !== originalAmount) {
    while (didYouMean(loanAmount)) {
      [originalAmount, loanAmount] = askForLoanAmount();
    }
  }
  return loanAmount;
}

function askForLoanAmount() {
  prompt(`How much would you like to borrow? `);
  let loanAmount = rlsync.question('$');
  let originalAmount = loanAmount;

  loanAmount = filterNonNumbers(loanAmount);

  while (isInvalidAmount(loanAmount)) {
    prompt(`That is not a valid amount, please enter a valid amount `);
    loanAmount = filterNonNumbers(rlsync.question('$'));
  }
  return [originalAmount, loanAmount];
}

function getDuration() {
  prompt("Would you like to calculate using years, months or both? ");
  let type = rlsync.question();
  while (invalidType(type)) {
    prompt(`Type "years", "months" or "both"`);
    type = rlsync.question();
  }
  return getLoanDuration(type);
}

function getLoanDuration(type, duration) {
  do {
    if (type === 'years' || type === 'y') {
      prompt("Over how many years do you intend to pay the loan? ");
      duration = rlsync.question();
    } else if (type === "months" || type === 'm') {
      prompt("Over how many months do you intend to pay the loan? ");
      duration = rlsync.question();
    } else if (type === "both" || type === 'b') {
      prompt('Please enter 2 whole numbers, separated by a comma');
      prompt(`Example: "10, 5" would be 10 years, 5 months`);
      duration = rlsync.question();
    } else {
      prompt("sorry I didn't understand your answer, try again");
    }
  } while (isInvalidTime(type, duration));
  return Number(monthCalculator(type, duration));
}

function monthCalculator(type, months) {
  if (type === 'years' || type === 'y') {
    months *= 12;
  } else if (type === "both" || type === 'b') {
    months = months.split(',').map((element) => parseInt(element, 10));
    months = (months[0] * 12) + months[1];
  }
  return months;
}

function getAnnualPercentageRate() {
  prompt(`What is the Annual Percentage Rate? \
Example: 5 for 5% or 2.5 for 2.5%`);
  let annualRate = rlsync.question();
  if (annualRate.includes('%')) {
    annualRate = annualRate.replace(/%/g, '');
  }
  while (validatePercentage(annualRate)) {
    if (annualRate.includes('%')) {
      annualRate = annualRate.replace(/%/g, '');
    }
    prompt(`Please enter a positive interest rate `);
    annualRate = rlsync.question();
  }

  return Number(annualRate);
}

// validation functions
function isInvalidAmount(number) {
  if (number[0] === '$') {
    number = number.slice(1, -1);
  } else if (number.trimStart() === '' || Number(number.trimStart()) < 1) {
    return true;
  }

  if (Number.isNaN(Number(number))) {
    return true;
  }

  return false;
}

function validatePercentage(number) {
  if (number === '' || Number(number.trimStart()) < 0 ||
    Number.isNaN(Number(number))) {
    return true;
  }

  return false;
}

function didYouMean(loanAmount) {
  prompt(`Did you mean to enter $${formatNumber(loanAmount)}? Type y/n`);
  let meant = rlsync.question();
  while (meant !== 'y' && meant !== 'n' && meant !== 'no' &&
    meant !== 'yes') {
    prompt(`I don't understand`);
    prompt(`Did you mean to enter $${formatNumber(loanAmount)}? Type y/n`);
    meant = rlsync.question();
  }
  if (meant === 'n' || meant === 'no') {
    return true;
  } else if (meant === 'y' || meant === 'yes') {
    return false;
  }
  return false;
}

function filterNonNumbers(loanAmount) {
  let numbers = '0123456789';
  const regex = new RegExp(/\D/);

  if (loanAmount[loanAmount.length - 2] === '.') {
    loanAmount += '0';
  }

  if (regex.test(loanAmount)) {
    loanAmount = loanAmount.split('');
    let filteredArray = loanAmount.filter((element, index) =>
      (element === '.' && index === (loanAmount.length - 3)) ||
      (numbers.includes(element)));
    loanAmount = filteredArray.join('');
  }
  return loanAmount;
}

function invalidType(type) {
  if (type !== 'years' && type !== 'months' && type !== 'both'
  && type !== 'y' && type !== 'm' && type !== 'b') {
    return true;
  }
  return false;
}

function isInvalidTime(type, number) {
  number = String(number);
  if ((type === 'both' || type === 'b') && ((number.includes('.') || !number.includes(',')))) {
    return true;
  } else if (isValidMonthOrYear(number)) {
    prompt('Please enter a number greater than 0');
    return true;
  }

  if (type !== 'both' && type !== 'b') {
    if (number.trimStart() === '' || Number.isNaN(Number(number))) {
      return true;
    } else if (number.includes('.')) {
      prompt('Please enter a whole number: ');
      return true;
    }
  }

  return false;
}

function isValidMonthOrYear(number) {
  let [years, months] = number.split(',');
  let stringDigits = number.split(',').map((element) =>
    parseInt(element, 10)).join('');

  if (Number(number.trimStart()) <= 0 ||
      Number.isNaN(Number(stringDigits)) ||
      years <= 0 ||
      months <= 0) {
    return true;
  }
  return false;
}

// helper functions
function calculateMonthlyPay(annualPercentageRate, loanAmount,
  loanDurationMonths, monthlyInterestRate) {
  let monthlyPay;
  if (annualPercentageRate === 0) {
    monthlyPay = loanAmount / loanDurationMonths;
  } else {
    monthlyPay = loanAmount * (Number(monthlyInterestRate) /
    ( 1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  }
  return monthlyPay;
}

// Returns an easily readable number to the user
function formatNumber(number) {
  number = Number(Number.parseFloat(number).toFixed(2));
  number = number.toLocaleString('en-US');

  // if toLocale returns only 1 decimals place, concat 0 to the end
  if (number[number.length - 2] === '.') {
    number += '0';
  }

  return number;
}

function printOutput(monthlyPay, loanDurationMonths,
  totalToPay, totalInterest, monthlyInterestRatePercentage) {
  prompt(`The monthly payment will be $${monthlyPay}`);
  prompt(`The total amount paid after ${Math.round(loanDurationMonths)} \
payments will be $${totalToPay}`);
  prompt(`The total amount paid in interest will be $${totalInterest}`);
  prompt(`The monthly interest rate is \
${monthlyInterestRatePercentage.toFixed(2)}%`);
  runAgain();
}


function runAgain() {
  prompt("Would you like to calculate another mortgage? ");
  prompt('Please enter "y" or "n".');
  let answer = rlsync.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = rlsync.question().toLowerCase();
  }
  if (answer === 'y' || answer === 'yes') {
    getInput();
  } else if (answer === 'n' || answer === 'no') {
    return false;
  }
  answer = '';
  return answer;
}

getInput();