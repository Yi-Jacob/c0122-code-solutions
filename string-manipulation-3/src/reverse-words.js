/* exported reverseWords */
/*
funciton with one argument
string as the argument
array to store the new values
gets each individual word in the string by splitting them by space
loop through all the individual  words
gets each individual character of each word
revereses the characters of each individual word
puts the words back together
puts the newly reversed word in the array
returns original string with the words in the same order but reveresed
*/

function reverseWords(string) {
  var words = string.split(' ');
  var array = [];
  for (var i = 0; i < words.length; i++) {
    var reversed = words[i].split('').reverse().join('');
    array.push(reversed);
  }
  return array.join(' ');
}

// function reverseWords(str) {
//   // Go for it
//   let reversed;
//   const newArray = [];
//   reversed = str.split(' ');
//   for (var i = 0; i < reversed.length; i++) {
//     newArray.push(reversed[i].split('').reverse().join(''));
//   }
//   return newArray.join(' ');
// }
