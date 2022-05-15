/* exported getTail */

function getTail(list) {
  let newList = list;
  while (newList.next) {
    newList = newList.next;
  }
  return newList.data;
}
