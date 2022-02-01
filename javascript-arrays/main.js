var colors = [
  'red,',
  'white',
  'blue'
];

console.log('values of colors[0] =', colors[0]);
console.log('values of colors[1] =', colors[1]);
console.log('values of colors[2] =', colors[2]);
console.log('America is', colors[0], colors[1], 'and', colors[2]);
colors[2] = 'green';
console.log('Mexico is', colors[0], colors[1], 'and', colors[2]);
console.log(colors);

var students = [
  'mando',
  'boba',
  'grogu',
  'luke'
];

var numberOfStudents = students.length;
console.log('Number of Students:', numberOfStudents);
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log(lastStudent);
console.log(students);
