/* exported equal */
/*
function with 2 parameters
loop through the first array for the values
checks to see if the values of the first array are equal to the second array at the same index
returns false if false
then checks to see if the arrays have the same amount of items
if they dont then false
if they pass all the tests return true
*/

function equal(first, second) {
  for (var i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) {
      return false;
    }
  } if (first.length !== second.length) {
    return false;
  }
  return true;
}
