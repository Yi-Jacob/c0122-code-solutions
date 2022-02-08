/* exported toObject */
/*
function with one parameter
take in array with 2 strings
assign the first string to an object as a property
assign the second string to an object as the properties value
return the object with the property and value
*/
function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  object[key] = value;
  return object;
}
