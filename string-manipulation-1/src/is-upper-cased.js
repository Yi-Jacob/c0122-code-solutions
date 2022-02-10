/* exported isUpperCased */
/* create function with parameter word
receives word as a string
checks string to see if all letters are uppercase
return T/F depending on string
*/

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
