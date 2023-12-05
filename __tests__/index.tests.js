import resultStylish from '../__fixtures__/result';
import gendiff from '../src/index.js';

describe('stylish', () => {
  test('json', () => {
    expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
  });
  test('yaml', () => {
    expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultStylish);
  });
  test('yml', () => {
    expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultStylish);
  });
});
