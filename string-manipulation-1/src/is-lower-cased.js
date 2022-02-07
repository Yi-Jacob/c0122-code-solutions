/* exported isLowerCased */
/* create function with parameter word
receives word as a string
checks string to see if all letters are lowercase
return T/F depending on string
*/
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
