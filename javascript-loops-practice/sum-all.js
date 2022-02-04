/* exported sumAll
function sumAll(numbers) {
  var x = numbers.reduce(function (prev, curr) {
    return curr + prev;
  }, 0);
  return x;
}
*/

function sumAll(numbers) {
  var array = [];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    array.push(numbers[i]);
    sum += numbers[i];
  }
  return sum;
}
