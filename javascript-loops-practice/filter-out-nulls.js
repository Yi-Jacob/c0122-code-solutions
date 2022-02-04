/* exported filterOutNulls
function
array to store data
find the null inside of the arrays
remove the null values from the array
return the array
*/
function filterOutNulls(values) {
  var array = [];
  var noNull = [];
  for (var i = 0; i < values.length; i++) {
    var hasNull = values[i];
    if (hasNull === null) {
      array.push(values[i]);
    } else {
      noNull.push(values[i]);
    }
  }
  return noNull;
}
