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

<<<<<<< HEAD
export { phoneNumberRegex, passwordRegex, lastNameRegex, firstNameRegex };
=======
/**
 * the `cidrRegex` regular expression validates CIDR Block IPv4
 * 
 * Example matches: 
 * 10.0.0.0/16
 * 192.168.1.1/24
 * 
 * Example non-matches:
 * 10.0.0.0
 * 192.168.1.1
 */
const cidrV4Regex = /(([1-9]{0,1}[0-9]{0,2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]{0,1}[0-9]{0,2}|2[0-4][0-9]|25[0-5])\/([1-2][0-9]|3[0-1])/;

export { phoneNumberRegex, passwordRegex, lastNameRegex, firstNameRegex, cidrV4Regex };
>>>>>>> origin
