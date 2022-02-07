/* exported capitalize
create function with parameter
get the string as an argument
get the first character of the string
capitlize first character of string
lowercase all the other characters
return the string with new parameters
*/

function capitalize(word) {
  var first = word[0];
  var capped = first.toUpperCase() + word.substring(1).toLowerCase();
  return capped;
}
