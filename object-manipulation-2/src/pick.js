/* exported pick */
/*
function with 2 parameters
new object to return
loop through all the keys
checks for the key in the object
if the key is there return the key and its value
if its not there do not add it to the new object
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
