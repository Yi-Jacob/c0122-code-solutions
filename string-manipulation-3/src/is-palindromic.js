/* exported isPalindromic */
/*
function with one parameter
loop through the string
get each character of the string
check the characters to see if they are present at the opposite index
return true if they are
return false if they are not
*/

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  const j = newString.length - 1;
  for (var i = 0; i < j / 2; i++) {
    const x = newString[i];
    const y = newString[j - i];
    if (x !== y) {
      return false;
    }
  }
  return true;
}
