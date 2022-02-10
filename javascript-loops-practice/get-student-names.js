/* exported getStudentNames
function
make array to store new data
take in array of objects
make sure all objects contain "name" property
get the value of the objects
put the new vlaues in array

*/
function getStudentNames(students) {
  var array = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    // eslint-disable-next-line dot-notation
    array.push(student['name']);
  }
  return array;
}
