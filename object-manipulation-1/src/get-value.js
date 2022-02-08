/* exported getValue */
/*
function with 2 parameters
takes in object and string
checks the string to see if it a property in the object
if the string is a property, return the value assigned
if not return undefinded
*/
function getValue(object, key) {
  // eslint-disable-next-line dot-notation
  return object[key];
}
