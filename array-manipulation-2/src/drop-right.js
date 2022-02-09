/* exported dropRight */

function dropRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    return array.slice(0, array.length - count);
  }
}
