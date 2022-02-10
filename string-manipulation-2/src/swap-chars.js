/* exported swapChars */
/*
function with 3 parameters
convert string to array
get the first number of the argument
get the character of the first number
get the second number of the argument
get the character of the second number
swap the 2 letters
*/
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var result = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = result;
  string = string.join('');
  return string;
}
