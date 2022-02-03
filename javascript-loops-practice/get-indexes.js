/* exported getIndexes */
function getIndexes(array) {
  array = [];
  for (var key in array) {
    array.push(getIndexes([key]));
  }
  return array;
}
