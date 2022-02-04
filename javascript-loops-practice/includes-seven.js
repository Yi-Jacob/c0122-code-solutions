/* exported includesSeven
look for #7 in the array
return T/F depending on #7
*/
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) return true;
  }
  return false;
}
