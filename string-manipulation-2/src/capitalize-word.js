/* exported capitalizeWord */
/* hey

*/
function capitalizeWord(word) {
  var string = word.toLowerCase();
  var result = string.charAt(0).toUpperCase();
  // eslint-disable-next-line no-console
  console.log(string);
  // eslint-disable-next-line no-console
  console.log(result);
  if (result === 'Javascript') {
    result = 'JavaScript';
  }
  return result;
}
