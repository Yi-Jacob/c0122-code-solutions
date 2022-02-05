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
  var empty = [];
  var words = string.split(' ');
  if (string === '') {
    return empty;
  }
  return words;
}
