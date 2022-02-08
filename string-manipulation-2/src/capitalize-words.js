/* exported capitalizeWords */
/*
function with one parameter
lowercases the argument string
separates the string by spaces to distinguish words
capitalizes the first letter of each word of the sentence
return the string with the first letter of each word capitalized
*/
function capitalizeWords(string) {
  var words = string.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
