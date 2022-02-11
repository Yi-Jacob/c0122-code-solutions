/* exported chunk */
/*
function with 2 parameters
takes the original arary as an argument
takes a number for the other argument
splits the original array into the number of arrays taken by the argument
returns the new array(s)
*/
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
