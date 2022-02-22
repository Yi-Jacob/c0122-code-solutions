/* exported isAnagram */
/*
function with 2 arguments
gets strings for both arguments
each string has to have the same amount of characters to be an anagram
gets each character of the first string
gets each character of the second string
checks the characters of the second string to see if they were contained in the first string
return boolean based off result
*/

// function isAnagram(firstString, secondString) {
//   if (firstString.length !== secondString.length) {
//     return false;
//   }
//   var first = firstString.split(' ').sort().join();
//   var second = secondString.split(' ').sort().join();
//   if (first === second) {
//     return true;
//   }
// }

function isAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }
  var str1 = firstString.split('').sort().join('');
  var str2 = secondString.split('').sort().join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
