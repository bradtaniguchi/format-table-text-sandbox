/**
 * Data that can be parsed. All elements will be automatically
 * casted to strings, which could create issues if the data
 * passed is inconsistent.
 */
type UnformattedData = Array<Array<any>>;

/**
 * Format options that can be passed.
 */
type FormatOptions = {
  /**
   * This can be used to provide a list of headers,
   * rather than passing them in as the first row of
   * unformatted text.
   */
  headers?: any[],
  /**
   * The column delimiter character(s), defaults to `|`.
   * This character(s) is automatically padded with spaces
   * on either side automatically.
   */
  columnDelimiter?: string,
  /**
   * The row delimiter character(s), defaults to `-`.
   */
  rowDelimiter?: string,
};
/**
 * Formats text into a table object.
 */
export const formatTextToTable = (
  data: UnformattedData,
  options?: FormatOptions
) => {
  // alias for simplicity
  const rows = data;
  const toStr = (val: any) => "" + val;
  const headers = options?.headers || data[0] || [];
  const columnDelimiter = options?.columnDelimiter || "|";
  const rowDelimiter = options?.rowDelimiter || "-";

  const baseColumnWidths = headers.map((header) => toStr(header).length);
  const columnWidths = rows.reduce((acc, row) => {
    row.forEach((column, index) => {
      const currentColumnLength = toStr(column).length
      if (currentColumnLength > acc[index]) {
        acc[index] = currentColumnLength;
      }
    });
    return acc;
  }, baseColumnWidths) as number[];

  const dataStr = rows
    .map((row) =>
      row.map((column, index) => toStr(column).padEnd(columnWidths[index], " ")).join(` ${columnDelimiter} `)
    );
  const headersStr = headers.join(` ${columnDelimiter} `);
  
  return [headersStr, ...dataStr].filter((_ ) =>_).join('\n');
};
