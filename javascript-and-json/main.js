var bookArray = [
  {
    isbn: '123',
    title: 'book1',
    author: 'author 1'
  },
  {
    isbn: '456',
    title: 'book2',
    author: 'author 2'
  },
  {
    isbn: '789',
    title: 'book3',
    author: 'author 3'
  }
];
console.log('Type of:', typeof (bookArray));

var stringifiedBooks = JSON.stringify(bookArray);
console.log('Stringified:', stringifiedBooks);
console.log('Type of:', typeof (stringifiedBooks));

var student = '{"Number ID":"345", "Student Name":"mario"}';
console.log('JSON Student:', student);
console.log('Type of student:', typeof (student));

var studentParsed = JSON.parse(student);
console.log('Parsed Student:', studentParsed);
console.log('Type of:', typeof studentParsed);
