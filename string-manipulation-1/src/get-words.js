/* exported getWords */
/*
function with parameter string
array to store values
get string
determine if there are spaces in the string
separate the string with spaces
make the newly separated characters into a string
add new strings to the array
*/
function getWords(string) {
  var array = [];
  var empty = [];
  var words = string.split(' ');
  if (string === '') {
    return empty;
  }
  for (var i = 0; i <= string.length; i++) {
    string[i] += ' ';
    array.push(words);
  }
  return words;
}
