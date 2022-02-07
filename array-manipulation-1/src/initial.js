/* exported initial */
/*
function with parameter of array
take in an array as an argument
get the first element of array
remove the first element
return the new array without the first element
*/

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
