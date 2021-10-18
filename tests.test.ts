const { formatTextToTable } = require('./index');

describe('formatTextToTable', () => {
  test('is defined', () => {
    expect(formatTextToTable).toBeTruthy();
    expect(typeof formatTextToTable).toEqual('function');
  });
  test('given empty array returns empty string', 
    () => expect(formatTextToTable([])).toEqual(''));
  test('given 2d empty array, returns empty string', 
    () => expect(formatTextToTable([[]])).toEqual(''));
  test('given 2d empty array, with seperate defined headers, returns headers', () => 
    () => expect(formatTextToTable([], {
      headers: ['one', 'two']
    })).toEqual('one | two'));
  test.todo('given 2d empty array, with empty seperate defined headers, returns empty string');
  test.todo('given 2d array with data with "long" headers, display table');
  test.todo('given 2d array with data with "long" data, display table with expanded headers');
});