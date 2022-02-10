/* exported defaults */
/*
function with 2 parameters
check the target object if the property of the source object is inside
if the property is not inside, add the property and value to the target
if the property is inside then do not add it
the target object will have new objects based off the source object

function defaults(target, source) {
  for (var key in source) {
    //if (source.hasOwnProperty(key) && target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  //return target;
}
*/
