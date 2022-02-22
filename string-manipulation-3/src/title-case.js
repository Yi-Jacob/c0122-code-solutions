/* exported titleCase */
/*
function with one parameter
takes a string of an argument
separates each individual word in the string
checks the length of each word
if its 4 or more capitlizie the first letter EXCEPT for API
if the 3 letter or less word is in the front of the string then capitilize
Javascript should return JavaScript
*/

function titleCase(title) {
  var words = title.split(' ');
  for (var i = 0; i < title.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
