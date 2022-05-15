/* exported getLength */

function getLength(list) {
  let newList = list;
  let i = 1;
  while (newList.next) {
    newList = newList.next;
    i++;
  }
  return i;
}
