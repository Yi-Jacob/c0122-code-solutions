/* exported getValues */
/*
function with one parameter
array to store values
take in the object from a variable
get the properties of the objects
put the values of the properties in an array
return the new array
*/
function getValues(object) {
  var newArray = [];
  for (var value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
