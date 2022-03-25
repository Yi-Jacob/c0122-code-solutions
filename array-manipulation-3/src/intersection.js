/* exported intersection */
/*
function with 2 parameters
new array to store the return value
loop through the first array
if the item is in the second array push it to the new array
loop through the seconf array
if the item is in the first array push it to the new array
return the new array
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.includes(second[i])) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
