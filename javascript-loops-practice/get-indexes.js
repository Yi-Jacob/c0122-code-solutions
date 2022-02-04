/* exported getIndexes
function
make the array to store indexes
take in the array
look at all values in the array
assign indexes to all values of the array
add the indexes to new array

 */
function getIndexes(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}
