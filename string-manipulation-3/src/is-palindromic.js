/* exported isPalindromic */
/*
I was having trouble with the "taco cat" test so i came up with a new method
function with one parameter
get rid of all spaces in the strings so that they are just strings with characters
gets the length of the string minus 1 and assigns it to a new variable
loop through half the string
get each character of the first half of the string
gets the characters of the last half of the string
return false if they are not the same
return true if they are
*/

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  var length = newString.length - 1;
  for (var i = 0; i < length / 2; i++) {
    var x = newString[i];
    var y = newString[length - i];
    if (x !== y) {
      return false;
    }
  }
  return true;
}
