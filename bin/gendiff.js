#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2, program.opts().format));
  });

program.parse(process.argv);
export default program;
