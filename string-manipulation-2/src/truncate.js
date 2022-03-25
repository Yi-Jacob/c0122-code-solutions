/* exported truncate */
/*
function with 2 parameters
takes the first argument to set the max length of the string
counts the length of the string
takes the amount of the length and subtracts it from the length of the string
returns a new string with the max length of the first argument
*/
function truncate(length, string) {
  var maxLength = length;
  if (string.length > maxLength) {
    string = string.substring(0, length) + '...';
  } else {
    return string + '...';
  }
  return string;
}
