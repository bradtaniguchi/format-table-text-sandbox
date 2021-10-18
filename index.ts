/**
 * Data that can be parsed. All elements will be automatically
 * casted to strings, which could create issues if the data
 * passed is inconsistent.
 */
type UnformattedData = any[][];

/**
 * Format options that can be passed.
 */
type FormatOptions = {
  /**
   * This can be used to provide a list of headers, 
   * rather than passing them in as the first row of
   * unformatted text. 
   */
  headers?: any[];
  /**
   * The column delimiter character(s), defaults to `|`.
   * This character(s) is automatically padded with spaces
   * on either side automatically.
   */
  columnDelimiter?: string;
  /**
   * The row delimiter character(s), defaults to `-`.
   */
  rowDelimiter?: string;
};
/**
 * Formats text into a table object.
 */
const formatTextToTable = (data: UnformattedData, options?: FormatOptions) => '';