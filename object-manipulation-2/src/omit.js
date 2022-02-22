/* exported omit */
/*
function with 2 parameters
create new object to return
checks for the key in the object
if the key is NOT in the object assign it to the new object
if the key is in the object do not return it or add it
return the keys and values
*/
function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.indexOf(key) === -1) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
