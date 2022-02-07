/* exported tail
/*
function with parameter of array
take in an array as an argument
get the first element of array
remove the first element
return the new array without the first element
*/
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
