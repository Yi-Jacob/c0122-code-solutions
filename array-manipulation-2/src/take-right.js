/* exported takeRight */
/*
function with 2 parameters
takes an array as one argument then a number as the second argument
'removes' the first elements based off the argument number
returns the new array
*/

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    return array.slice(-count);
  }
}
