/* exported invert */
/*
function with one parameter
create new object to return
adds the values to the new objects as properties
adds the property names to the new object as property values
returns the new object
*/
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
