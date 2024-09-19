import chalk from 'chalk';
console.log(chalk.blue('It works'));

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a und b müssen Zahlen sein');
    }
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else {
        throw new Error('Unbekannte Operation');
    }
  }