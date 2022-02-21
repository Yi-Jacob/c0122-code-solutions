/* exported defaults */
/*
function with 2 parameters
create array to store values in
checks for the key in the target
checks for the key in the source
check the target object if the property of the source object is inside
if the property is not inside, add the property and value to the target
if the property is inside then do not add it
the target object will have new objects based off the source object
*/

function defaults(target, source) {
  var targetKey = [];
  var sourceKey = [];
  for (var key1 in target) {
    targetKey.push(key1);
  }
  for (var key2 in source) {
    sourceKey.push(key2);
  }
  for (var i = 0; i < sourceKey.length; i++) {
    if (targetKey.indexOf(sourceKey[i]) === -1) {
      target[sourceKey[i]] = source[sourceKey[i]];
    }
  }
}
