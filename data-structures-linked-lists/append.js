/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let newList = list;
  while (newList.next) {
    newList = newList.next;
  }
  newList.next = new LinkedList(value);
}
