/* exported reverse */
/*
function with parameter array
new array to store new array values
run the function for the length of the array
remove the items from the old array from the LAST element
add the items from the old array to the new array
return the array
*/

function reverse(array) {
  var newArray = [];
  while (array.length) {
    newArray.push(array.pop());
  }
  return newArray;
}
