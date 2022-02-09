/* exported firstChars */
/*
function with 2 parameters
set the length of the string determined by the first argument
get the number of characters based off the length
return a new string with the number of characters based off the length
the new characters should be the first characters based off length
*/

function firstChars(length, string) {
  var stringLength = length;
  return string.slice(0, stringLength);
}
