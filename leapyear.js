import readline from 'readline-sync';
import chalk from 'chalk';

const name = readline.question(chalk.bold.underline('Enter your name')+' : ');
console.log(chalk.underline.bold('Hi')+ ' 👋 👋 👋 ' + chalk.bold(name)+', ' + chalk.underline.blueBright('Welcome to the Leap Year checker game!!!') +' 🎊 🎊 🎊');
//taking the dob as input
const year = readline.question(chalk.underline('Enter your birth year (yyyy)') + ' : '); readline.question(chalk.underline('Enter your birth month (mm)') + ' : ');readline.question(chalk.underline('Enter your birth date (dd)') + ' : ');

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)){
    console.log( chalk.bold('Congratulations')+ ' ' + chalk.bold.underline(name)+' 🎉 🎉 🎉 '  + 'Your birthdate is in a Leap Year🥳 🥳 🥳');
}else{
    console.log(chalk.underline('Sorry')+' '+ chalk.bold(name) + ' ❌ '+chalk.bold.underline('your birthdate is not in Leap Year😔 😔 😔'));
}