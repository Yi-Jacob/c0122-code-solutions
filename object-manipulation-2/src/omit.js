/* exported omit */
/*
function with 2 parameters
create new object to return
checks for the key in the object
if the key is NOT in the object return the key and value
if the key is in the object do not return it
*/
function omit(source, keys) {
  delete source.keys;
  var newObj = { source };
  return newObj;

}
