/* exported reverseWords */
/*
funciton with one argument
string as the argument
empty string to hold the words in
another empty string to hold letters in
loop through the string
if theres a space then store the value and concatenate it to the result string
make the temporary string empty
if theres no space just add the last letter to the front in the temp storage
assign the values in the temp storage to the result
return the result
*/

function reverseWords(string) {
  var result = '';
  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      tempString += ' ';
      result += tempString;
      tempString = '';
    } else {
      tempString = string[i] + tempString;
    }
  }
  result += tempString;
  return result;
}
