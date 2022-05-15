/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  while (count < index) {
    const first = queue.dequeue();
    queue.enqueue(first);
    count++;
  }
  return queue.dequeue();
}
