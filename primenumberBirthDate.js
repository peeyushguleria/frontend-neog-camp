import readline from 'readline-sync';
import chalk from 'chalk';

const name = readline.question(chalk.bold.underline('Enter your name: '));
const welcome = readline.question(chalk.bold.underline(`Hi ${name}, we welcome you to this prime checker game.`));
const dateInput = readline.question(chalk.bold.underline('Enter your birth date (dd): '));
const monthInput = readline.question(chalk.bold.underline('Enter your birth month (mm): '));

// Check if the inputs are valid numbers
const date = parseInt(dateInput);
const month = parseInt(monthInput);
const sadStatement = chalk.underline('Sorry') + ` ${chalk.bold(name)} ❌ ` + chalk.bold.underline('your birthdate is not a Prime Number😔 😔 😔');
const congratsStatement = chalk.bold('Congratulations') + ` ${chalk.bold.underline(name)} 🎉 🎉 🎉 ` + 'Your birthdate is a Prime Number🥳 🥳 🥳';

if (isNaN(date) || isNaN(month)) {
  console.log(chalk.bold.red('Error: Invalid input! Please enter numbers for the date and month.'));
} else if (date > 0 && date < 32 && month > 0 && month < 13) {
  // Check for valid dates in February
  if (month === 2 && date > 29) {
    console.log(chalk.bold.red('Error: Invalid input! February has at most 29 days.'));
  } else  {
    console.log(isPrime(date));
  }
} else {
  console.log(chalk.bold.red('Error: Invalid input! Please enter valid numbers for the date and month.'));
}

function isPrime(number) {
  if (number <= 1) {
    return sadStatement;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return sadStatement;
    }
  }
  return congratsStatement;
}
