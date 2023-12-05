import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parser = (filename) => (path.basename(filename) !== '.json'
  ? yaml.load(readFileSync(filename, 'utf-8'))
  : JSON.parse(readFileSync(filename, 'utf-8')));

export default parser;
