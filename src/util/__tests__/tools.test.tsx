import { nestedGet } from "../tools";

describe('nestedGet', () => {
  it('should create an object and set a key to a value', () => {
    const value = nestedGet('a', null);
    expect(value).toEqual(undefined);
  });
  it('should use an empty object and set a key to a value', () => {
    const value = nestedGet('a', {});
    expect(value).toEqual(undefined);
  });
  it('should use an empty object and set a key to a value', () => {
    const value = nestedGet('a', { a: {} });
    expect(value).toEqual({});
  });
  it('should use an empty object and set a key to a value', () => {
    const value = nestedGet('a.b', { a: { b: 1 } });
    expect(value).toEqual(1);
  });
  it('should use an empty object and set a key to a value', () => {
    const value = nestedGet('c.b', { a: {}, c: { b: 1 } });
    expect(value).toEqual(1);
  });
});

