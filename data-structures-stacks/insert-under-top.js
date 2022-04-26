/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const originalTop = stack.pop();
    stack.push(value);
    stack.push(originalTop);
    return stack.peek();
  }
}
