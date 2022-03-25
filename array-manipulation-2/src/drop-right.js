/* exported dropRight */
/*
function with 2 parameters
check the length of the array and make sure its less than the count
if its less then you can just return the array
if its not cut off the right part of the array
retrun the array starting at the first index up to the count
*/

function dropRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    return array.slice(0, array.length - count);
  }
}
