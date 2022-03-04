/* exported unique */
/*
function with 1 parameter
a new array with the values
loop thorugh the items of the array
push the items in the new array
if the item is in the array do not push it or push it into an array the isnt returned
return the new array
*/

function unique(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!(newArray.includes(array[i]))) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
