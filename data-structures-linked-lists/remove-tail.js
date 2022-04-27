/* exported removeTail */

function removeTail(list) {
  if (list.next) {
    let temp = list.next;
    while (temp) {
      if (!temp.next.next) {
        temp.next = null;
      }
      temp = temp.next;
    }
  }
}
