const phoneNumberRegex = /^[-+0-9()]+$/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
/**
 * The `firstNameRegex` regular expression allows for a maximum of two words, separated by spaces, hyphens, or apostrophes.
 * The first and last characters must be a letter character from any script or a character intended to be combined with others (e.g. accents).
 * This allows for names written in any script and enables support for non-Latin characters.
 *
 * Example matches:
 *   - "John"
 *   - "Jane Doe"
 *   - "José"
 *   - "马修"
 *
 * Example non-matches:
 *   - "John Doe!"
 *   - "Jane Doe-"
 *   - "José-Maria" (more than two words)
 
*/
const firstNameRegex = /^[\p{L}\p{M}]+([ \-']{0,1}[\p{L}\p{M}]+){0,1}$/u;

/**
 * The `lastNameRegex` regular expression allows for a maximum of three words, separated by spaces, hyphens, or apostrophes.
 * The first and last characters must be a letter character from any script or a character intended to be combined with others (e.g. accents).
 * This allows for names written in any script and enables support for non-Latin characters.
 *
 * Example matches:
 *   - "Smith"
 *   - "De la Cruz"
 *   - "王大力"
 *
 * Example non-matches:
 *   - "De la Cruz!"
 *   - "王大力-"
 *   - "De la Cruz-Martinez" (more than three words)
 */
const lastNameRegex = /^[\p{L}\p{M}]+([ \-']{0,1}[\p{L}\p{M}]+){0,2}$/u;

export { phoneNumberRegex, passwordRegex, lastNameRegex, firstNameRegex };
