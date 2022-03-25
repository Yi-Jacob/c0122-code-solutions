/* exported union */
/*
function with 2 parameters
new array to store the values
loop through the first array
if the push all the items of the first array into the new array
loop through the second array
push all the items into the new array that are NOT in the first array
return the new array
*/

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!(newArray.includes(first[i]))) {
      newArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!(newArray.includes(second[x]))) {
      newArray.push(second[x]);
    }
  }
  return newArray;
}
