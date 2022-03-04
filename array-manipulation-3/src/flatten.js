/* exported flatten */
/*
function with one parameter
new array to store values
loop through the array to check if it is an array
if it is an array loop through items in the array to see if they are arrays
push the array items into the new aray
if its not an array push it into the new array
return the new array
*/
function flatten(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
