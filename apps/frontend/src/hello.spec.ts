import { hello } from './hello';

describe('Hello', () => {
  it('should return a string', () => {
    expect(hello()).toEqual('hello')
  })
});
