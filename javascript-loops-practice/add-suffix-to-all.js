/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  for (var i = 0; i < words.length; i++) {
    array[i] = words[i] + suffix;
  }
  return array;
}
