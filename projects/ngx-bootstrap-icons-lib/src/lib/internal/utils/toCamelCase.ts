/**
 * Converts String to Camel Case with specified separator.
 *
 * @param input string
 * @param separator separate symbol
 * @returns converted string
 */
export function toCamelCase(input: string, separator = '-'): string {
  if (!input) throw Error('missing argument');

  const val = input.trim();
  if (!val.includes(separator)) return val;

  let res = '';
  let iterator = 0;

  for (iterator; iterator < input.length; iterator += 1) {
    const char = input.charAt(iterator).trim();

    if (iterator === 0) {
      res += char.toLowerCase();
      // eslint-disable-next-line no-continue
      continue;
    }

    if (char === separator) {
      res += input.charAt(iterator + 1).trim().toUpperCase();
      iterator += 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    // eslint-disable-next-line no-restricted-globals
    if (iterator > 0 && !isNaN(Number(+input.charAt(iterator - 1)))) {
      res += char.toUpperCase();
      // eslint-disable-next-line no-continue
      continue;
    }

    if (iterator > 0) res += char;
  }
  return res.trim();
}
