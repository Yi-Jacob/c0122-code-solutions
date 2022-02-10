/* exported compact */
/*
function with array parameters
array to store new info
takes in array as argument
checks array for false, null, NaN, 0, -0, undefined, empty strings
places the good values in a new array
maintains order of elements in the new array
*/
function compact(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) newArray.push(array[i]);
  }
  return newArray;
}
