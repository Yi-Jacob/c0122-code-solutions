/* exported numVowels */
/*
function with one parameter
takes string as argument
starts the count of vowels at 0
sets the parameters of what is a vowel
counts the number of vowels in the string
increments the number for each vowel
returns the number
*/

function numVowels(string) {
  var count = 0;
  var vowels = 'aeiouAEIOU';
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      count++;
    }
  }
  return count;
}
