let rlsync = require('readline-sync');
const MESSAGES = require('./loanMessages.json');
let english = MESSAGES.en;

function prompt(message) {
  console.log(`=> ${message}`);
}

// getter function
function getInput() {
  prompt('Welcome to out Mortgage Calculator');
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
  prompt(`The total amount paid after ${loanDurationMonths.toFixed(2)} \
payments will be $${totalToPay}`);
  prompt(`The total amount paid in interest will be $${totalInterest}`);
  prompt(`The monthly interest rate is \
${monthlyInterestRatePercentage.toFixed(2)}%`);
  runAgain();
}

// helper getter functions
function getLoanAmount() {
  prompt(english.amount);
  let loanAmount = rlsync.question('$');

  if (loanAmount.includes(',')) {
    loanAmount = loanAmount.split(',').join('');
  }

  if (loanAmount.includes('.')) {
    loanAmount = loanAmount.split('.').join('');
  }

  while (isInvalidAmount(loanAmount)) {
    prompt(english.invalid);
    loanAmount = rlsync.question('$');
  }

  return Number(loanAmount);
}

function getAnnualPercentageRate() {
  prompt(english.annualRate);
  let annualRate = rlsync.question();
  if (annualRate.includes('%')) {
    annualRate = annualRate.replace(/%/g, '');
  }
  while (validatePercentage(annualRate)) {
    if (annualRate.includes('%')) {
      annualRate = annualRate.replace(/%/g, '');
    }
    prompt(english.validPercentage);
    annualRate = rlsync.question();
  }

  return Number(annualRate);
}

// separated in two as there is a lot of validation going on
function getLoanDuration(type, duration = '') {
  do {
    if (type === 'years' || type[0] === 'y') {
      prompt("Over how many years do you intend to pay the loan? ");
      duration = rlsync.question() * 12;
    } else if (type === "months" || type[0] === 'm') {
      prompt("Over how many months do you intend to pay the loan? ");
      duration = rlsync.question();
    } else if (type === "both" || type[0] === 'y') {
      prompt("Please answer with years first, then months");
      prompt(`Example: "10, 5" would be 10 years, 5 months`);
      duration = rlsync.question();
      duration = duration.split(',').map((element) => parseInt(element, 10));
      duration = (duration[0] * 12) + duration[1];
    } else {
      prompt("sorry I didn't understand your answer, try again");
    }
  } while (isInvalidTime(duration));
  return Number(duration);
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

// input validation functions
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

function invalidType(type) {
  if (type !== 'years' && type !== 'months' && type !== 'both'
  && type[0] !== 'y' && type[0] !== 'm' && type[0] !== 'b') {
    console.log('conditon not met');
    return true;
  }
  return false;
}

function isInvalidTime(number) {
  number = String(number);
  if (number.trimStart() === '' || Number.isNaN(Number(number))) {
    return true;
  } else if (Number(number.trimStart()) <= 0) {
    return true;
  }

  return false;
}

// restart funtion
function runAgain() {
  prompt("Would you like to calculate another mortgage? ");
  prompt('Please enter "y" or "n".');
  let answer = rlsync.question().toLowerCase();
  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = rlsync.question().toLowerCase();
  }
  if (answer === 'y' || answer === 'yes') {
    getInput();
  } else if (answer === 'n' || answer === 'yes') {
    return false;
  }
  answer = '';
  return answer;
}

getInput();