var student = {
  firstName: 'Jacob',
  lastName: ' Yi',
  age: 21
};
var fullName = student.firstName + student.lastName;

console.log('Full Name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'retail';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Mercedes',
  model: 'G-Wagon',
  year: 2021
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('Car-Color:', vehicle['color']);
console.log('Convertible?', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'cat',
  type: 'tiger'
};

delete pet.name;
delete pet.type;
console.log('Pet:', pet);
