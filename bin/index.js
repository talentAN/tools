#!/usr/bin/env node
/** @format */

const { Command } = require('commander');
const packageJson = require('../package.json');

const program = new Command('talentan').version(packageJson.version);
// 批量修改后缀
program.command('resuffix <origin_suffix> <target_suffix>', '批量修改后缀', {
  executableFile: '../src/resuffix'
});

program.parse(process.argv);
