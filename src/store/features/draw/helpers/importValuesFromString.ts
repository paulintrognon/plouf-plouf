import Values from '../types/Values.type'

/**
 * Split a given text using '\n' character, trim values
 * @param text values in one string, seperating by '\n' character
 */
export function importValuesFromString(text: string): Values {
  return text
    .split('\n')
    .map(value => value.trim())
    .filter(value => Boolean(value))
}
