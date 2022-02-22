/* exported isAnagram */
/*
function with 2 arguments
gets strings for both arguments
gets rid of all the spaces and joins the characters.
assigns the strings with no spaces to a new string
gets each individual character of each string
puts all the characters in alphabetical order
puts all the characters into a new string
assign the new string to a variable
checks to see if the first string is the same as the second string
return boolean based off result
*/

function isAnagram(firstString, secondString) {
  var newString1 = firstString.replaceAll(' ', '');
  var newString2 = secondString.replaceAll(' ', '');

  var str1 = newString1.split('').sort().join();
  var str2 = newString2.split('').sort().join();
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
