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
  var word = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < word.length; i++) {
    if (word[i].includes('-')) {
      var splitHyphen = word[i].split('-');
      for (var j = 0; j < splitHyphen.length; j++) {
        splitHyphen[j] = splitHyphen[j].charAt(0).toUpperCase() + splitHyphen[j].slice(1);
      }

      var hyphen = splitHyphen.join('-');
      word[i] = hyphen;

    } else if (word[i] === 'api') {
      word[i] = 'API';
    } else if (word[i] === 'javascript:') {
      word[i] = 'JavaScript:';
    } else if (word[i] === 'javascript') {
      word[i] = 'JavaScript';
    } else if (word[i].length >= 4) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (i === 0) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (minor.indexOf(word[i]) === -1) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    } else if (word[i - 1].includes(':')) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
  }
  var output = word.join(' ');
  return output;
}
