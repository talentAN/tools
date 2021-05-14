/** @format */

const fs = require('fs');
const process = require('process');
const path = require('path');
const { Command } = require('commander');
const message = require('./utils/message');

const _isOriginFile = (origin_suffix, p) => {
  return p.indexOf(`.${origin_suffix}`) === p.length - origin_suffix.length - 1;
};

const _rename = (origin_suffix, target_suffix, child, p) => {
  const origin = path.resolve(p, child);
  const pos = origin.length - origin_suffix.length;
  const target = origin.slice(0, pos) + `${target_suffix}`;
  fs.renameSync(origin, target);
  message.info(
    `rename ${origin.slice(process.cwd().length)} => ${target.slice(process.cwd().length)}`
  );
};

const _goOver = (origin_suffix, target_suffix, p, opts, isStart = false) => {
  if (isStart) {
    message.info(`rename start`);
  }
  const res = fs.readdirSync(p);
  res.forEach(child => {
    // 如果当前目录有目标文件，直接改掉
    if (_isOriginFile(origin_suffix, child)) {
      _rename(origin_suffix, target_suffix, child, p);
      return;
    }
    // 如果是目录, 并且需要递归
    if (opts.all && fs.lstatSync(path.resolve(p, child)).isDirectory()) {
      _goOver(origin_suffix, target_suffix, path.resolve(p, child), opts);
    }
  });
  if (isStart) {
    message.success(`everything's done`);
  }
};

const program = new Command()
  .option('-d, --dev', '开发环境')
  .option('-b, --debug', '联调环境')
  .option('-t, --test', '测试环境')
  .option('-o, --demo', '演示环境')
  .action(async opts => {
    const _path = path.resolve(process.cwd(), '.');
    _goOver(origin_suffix, target_suffix, _path, opts, true);
  });

program.parse(process.argv);
