#!/usr/bin/env node
/** @format */

const { Command } = require('commander');
const packageJson = require('../package.json');

const program = new Command('pls').version(packageJson.version);
// 批量修改后缀
program.command('reSuffix <origin_suffix> <target_suffix>', '批量修改后缀', {
  executableFile: '../src/reSuffix'
});

program.parse(process.argv);
