/* exported filterOutStrings
find the strings values in the array
remove the string values from the array
return revised array
*/
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    var type = typeof values[i];
    if (type !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
