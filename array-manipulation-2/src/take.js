/* exported take */
/*
function with 2 parameters
takes an array as an argument
takes the number as a second argument
returns the elements of the array up to the number
returns the arary
*/

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
