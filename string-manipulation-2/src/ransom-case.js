/* exported ransomCase */
/*
function with one parameters
gets the string as an argument
lowercases all the odd number letters in the string
capitalizes all the even number letters in the string
returns the new string.
*/
function ransomCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
