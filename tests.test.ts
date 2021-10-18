const { formatTextToTable } = require("./index");

describe("formatTextToTable", () => {
  test("is defined", () => {
    expect(formatTextToTable).toBeTruthy();
    expect(typeof formatTextToTable).toEqual("function");
  });
  test("given empty array returns empty string", () =>
    expect(formatTextToTable([])).toEqual(""));
  test("given 2d empty array, returns empty string", () =>
    expect(formatTextToTable([[]])).toEqual(""));
  test("given 2d empty array, with seperate defined headers, returns headers", () =>
    expect(
      formatTextToTable([], {
        headers: ["one", "two"],
      })
    ).toEqual("one | two"));
  // TODO: add tests to check for custom column delimiters
  test("given 2d empty array, with empty seperate defined headers, returns empty string", () =>
    expect(
      formatTextToTable([[]], {
        headers: [],
      })
    ).toEqual(""));
  test('given 2d array with data with "long" headers, display table', () =>
    expect(
      formatTextToTable(
        [
          ["brad", "100"],
          ["foo", "bar"],
        ],
        {
          headers: ["name", "aggeeeeeeeee"],
        }
      )
    ).toEqual(
      'name | aggeeeeeeeee\n' + 
      'brad | 100         \n' +
      'foo  | bar         '));
  test.todo(
    'given 2d array with data with "long" data, display table with expanded headers'
  );
});
