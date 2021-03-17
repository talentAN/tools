/** @format */

const chalk = require('chalk');

const message = {
  success: info => console.log(chalk.green('success'), info),
  info: info => console.log(chalk.blue('notice'), info),
  warn: info => console.log(chalk.yellow('warning'), info),
  error: info => console.log(chalk.red('error'), info)
};

module.exports = message;
