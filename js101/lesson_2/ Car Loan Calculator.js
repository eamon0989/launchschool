/*
input - loan amount, annual percentage rate, loan duration
input percentage as a while number, e.g. 20 = 20%
loan amount must be an integer, no floating point
APR can be a float, e.g. 5.5%
Loan duration can be given in months or years (or both?)
e.g. 10 years, 6 months

output - monthly interest rate, loan duration in months
Output - print in dollar and cents e.g. $120.05

example
amount $10,000, percentage rate 5%, duration 10 years
payment $105.52, totatl 120 months, 120 payments $12,662.82,
total interest $2,662.82

formula - let m = p * (j / (1 - Math.pow((1 + j), (-n))));
The Math.pow() function returns the base to the exponent power,
as in base^exponent.
e.g. 5, 3 = 125

m = monthly pyment, p = loan amount, j = monthly interest rate
n = loan duration in months

monthlyPay = loanAmount * (monthlyInterestRate /
( 1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)));

how do I convert APR Annual Percentage Rate to monthly interest rate?
APR / 100 e.g. 10 / 100 = 0.10
0.10 / 12 (months) = 0.0083 (MIR as a decimal)
$2,000 * 0.0083 = $16.60 per month
0.0083 * 100 = 0.83%
Monthly interest rate is 0.83%

no interest loans?

amortization??

Mental model:

get the loan amount, annual percentage rate and loan duration from
the user. calcuate the monthly interest rate and loan duration in
months, also the total amount to be paid and total interest amount


Test cases

amount $10,000, percentage rate 5%, duration 10 years
payment $105.52, totat 120 months, 120 payments $12,662.82,
total interest $2,662.82

$25000 over 5 years, 5% APY
Payment Every Month $470.51
Total of 60 Payments $28,230.60
Total Interest $3,230.60

Edge cases?
No input
Negative inputs
0% interest, -0% interest?
Extremely high amounts of money?
Put a max on years? Minimum 1 month

Data structure

Numbers, number manipulation
Strings

Algorithm

Create variables to store loan amount, APY, duration in years
get data from user, verify data is within parameters
determine monthly percentage rate
determine amount of months (years * 12)
run data through the given alogrithm
return data to user in form of string

Flowchart
Ask user for loan amount
check loan amount is within parameters using a function, if not loop
check if first symbol is a currency sign, if so remove
ask user for APY
check APY is within parameters, if not ask again
ask user for duration in years, check parameters, if not loop

determine monthly percentage rate and amount of years

run data through a function that returns data as a string and prints it
*/

