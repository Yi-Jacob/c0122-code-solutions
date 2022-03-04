/* exported zip */
/*
function with 2 parameters
a new array to store the values
another new array to store the duos
loop through both the arrays
push the values of the index into the new array that holds the duo
push that dou array into the new array
return the new array
*/

function zip(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    var subArray = [first[i], second[i]];
    newArray.push(subArray);
  }
  return newArray;
}
