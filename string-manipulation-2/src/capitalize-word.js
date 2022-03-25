/* exported capitalizeWord */
/*
function with one parameter
checks the function for uppercase letters
makes all the letters lowercase
has a new string that capilizess the string's first letter and keeps the others lowercased.
return the new string with only the first letter capitalized
special exception is JavaScript
always return JavaScript for the letter combination.
*/
function capitalizeWord(word) {
  var string = word.toLowerCase();
  var result = string.charAt(0).toUpperCase() + string.slice(1);
  if (result === 'Javascript') {
    result = 'JavaScript';
  }
  return result;
}
