import { search } from '../src/index';
import isObjectWithExpectedProperties from '../src/utils/objectChecker';
describe('Searching test', () => {
  test('Search for empty string gives some response', async () => {
    const results = await search('');
    expect(results).toBeDefined();
    expect(typeof results).toEqual('object');
    expect(Object.keys(results).length).toEqual(0);
  });
  test("Search for 'test' gives some response", async () => {
    const results = await search('test');
    expect(results).toBeDefined();
    expect(typeof results).toEqual('object');
    expect(Object.keys(results).length).toBeGreaterThan(0);
  });
  test('Search result gives same response', async () => {
    const results = await search('test');
    results.forEach((result) => {
      expect(isObjectWithExpectedProperties(result)).toBe(true);
    });
  });
});
