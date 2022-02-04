/* exported reverseWord */
/*
function with parameter word
make a string to store the new string
get a string as an argument
reverse the characters in the string
return the new string

function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i > word.length; i--) {
    newString += word[i];
  }
  return newString;
}
*/
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
