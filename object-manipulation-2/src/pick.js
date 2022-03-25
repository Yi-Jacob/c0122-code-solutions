/* exported pick */
/*
function with 2 parameters
new object to return
loop through all the keys
assign the value of the key to a new variable
checks for the key in the object
if the key is there add both the property and value to the new object
if its not there do not add it to the new object
return the new object
*/
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
