function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var secondsResult = convertMinutesToSeconds(6);
console.log('Seconds:', secondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetingResult = greet('Jacob');
console.log('Greeting:', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(10, 10);
console.log('Area:', areaResult);

function getFirstName(person) {
  var firstNameResult = person.firstName;
  return firstNameResult;
}
var gotFirstName = getFirstName({ firstName: 'Kobe', lastName: 'Lamperouge' });
console.log('Firstname:', gotFirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var last = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last item:', last);
