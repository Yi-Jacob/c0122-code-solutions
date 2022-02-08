/* exported getKeys */
/*
function with one parameter
array to store values
take in the object from a variable
get the properties of the objects
put the names of the properties in an array
return the new array
*/

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
