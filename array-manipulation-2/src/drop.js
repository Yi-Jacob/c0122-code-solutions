/* exported drop */
/*
function with 2 parameters
takes an array as an argument
takes the number as a second argument
returns the elements excluding the amount of the number
returns the arary
*/

function drop(array, count) {
  var newArray = array.slice(count);
  return newArray;
}
