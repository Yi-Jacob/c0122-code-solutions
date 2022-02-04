/* exported oddOrEven
check if the number is divisible by 2
return even if true
return odd if not
*/
function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if ((number % 2) === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}
