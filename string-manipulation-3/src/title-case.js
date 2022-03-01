/* exported titleCase */
/*
function with one parameter
lowercase the full string to make it easier to capitalize
add all the special case words into an array to hold onto
get each individual word by splitting it
upper case the first letter of each word and add the rest of the letters of that word
change Javascript to JavaScript
loop through the words
-if its a special case you uppercase it
-if it has a colon or dash you upper case the word prior
if its api return API
put the words together by the spaces they had
*/

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var specialCases = ['and', 'or', 'nor', 'but', 'a', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'the'];
  var words = lowerCased.split(' ');
  words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1);
  if (words[0].charAt(0) === 'J') {
    words[0] = 'JavaScript:';
    words[1] = 'The';
  }
  for (var i = 1; i < words.length; i++) {
    if (specialCases.indexOf(words[i]) === -1) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    if (words[i].indexOf(':') !== -1) {
      words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].substring(1);
    }
    if (words[i].indexOf('-') !== -1) {
      var location = words[i].indexOf('-');
      var upperCaseLetter = words[i].charAt(location + 1).toUpperCase();
      var newWord = words[i].substring(0, location + 1) + upperCaseLetter + words[i].substring(location + 2, words[i].length);
      words[i] = newWord;
    }
    if (words[i] === 'Javascript') {
      words[i] = 'JavaScript';
    }
    if (words[i] === 'Javascript:') {
      words[i] = 'JavaScript:';
    }
    if ((words[i] === 'Api')) {
      words[i] = 'API';
    }
  }
  return words.join(' ');
}
