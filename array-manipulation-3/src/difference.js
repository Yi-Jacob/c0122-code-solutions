/* exported difference */
/*
function with 2 parameters
an array to store the new value ins
loop through the first array and get its values
if the value is not in the second array push it into the new array
loop through the second array for its values
if the value is not in the first array push it into the new array
return the new array
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      newArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!(first.includes(second[x]))) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
