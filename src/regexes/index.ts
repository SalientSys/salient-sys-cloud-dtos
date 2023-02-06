const phoneNumberRegex = /^[-+0-9()]+$/;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
/*
  This regular expression allows a maximum of two words separated by spaces, hyphens, or apostrophes.
  The first and last characters must belong to any of the Unicode script ranges from Basic Latin to Latin Extended-A,
  ensuring that the string starts and ends with a word character rather than a symbol.
  The character range \u0041-\u005A corresponds to uppercase Latin letters (A-Z),
   \u0061-\u007A to lowercase Latin letters (a-z), and \u00C0-\u017F to Latin-1 Supplement, which includes accented Latin letters.
  The other character ranges \u0180-\u024F, \u0250-\u02AF, \u0370-\u03FF, \u0400-\u04FF, \u0500-\u052F,
  and \u1E00-\u1EFF correspond to different Unicode scripts including Latin Extended-B, IPA Extensions, Greek, Cyrillic, and various other scripts.
*/
const firstNameRegex =
  /^[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u1E00-\u1EFF]+([ -']{0,1}[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u1E00-\u1EFF]+){0,1}$/;

/*
This regular expression allows a maximum of three words separated by spaces, hyphens, or apostrophes.
The first and last characters must belong to any of the Unicode script ranges from Basic Latin to Latin Extended-A,
ensuring that the string starts and ends with a word character rather than a symbol.
The character ranges included in this regular expression are the same as in firstNameRegex.
*/
const lastNameRegex =
  /^[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u1E00-\u1EFF]+([ -']{0,1}[\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u1E00-\u1EFF]+){0,2}$/;

export { phoneNumberRegex, passwordRegex, lastNameRegex, firstNameRegex };
