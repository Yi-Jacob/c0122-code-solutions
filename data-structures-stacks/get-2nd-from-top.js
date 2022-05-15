/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const originalTop = stack.pop();
    const secondFromTop = stack.peek();
    stack.push(originalTop);
    return secondFromTop;
  }
}
