/* exported isVowel */
/* function with one parameter char
get char
determine if char = a,e,i,o,u and uppercase
return T/F based off ^

function isVowel(char) {
  var char;
  if (char == 'a' || char === 'e' || char === 'i' || char === 'o' || char = 'u') {
    return true;
  } else {
    return false;
  }
}
*/

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' ||
    char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' ||
    char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
