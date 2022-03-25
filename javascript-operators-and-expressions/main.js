var width = 10;
var height = 10;
var area = width * height;
console.log('area:', area);
console.log('type of area:', typeof area);

var bill = 20;
var payment = 25;
var change = payment - bill;
console.log('change:', change);
console.log('type of change', typeof change);

var quizzes = 90;
var midterm = 85;
var final = 80;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('type of grade', typeof grade);

var firstName = 'Jacob ';
var lastName = 'Yi';
var fullName = (firstName + lastName);
console.log(fullName);
console.log('fullname:', typeof fullName);

var pH = 3;
var isAcidic = pH < 7;
console.log('Is Acidic?', isAcidic);
console.log('type of acidic', typeof isAcidic);

var headCount = 301;
var isSparta = headCount === 300;
console.log('Is Sparta?', isSparta);
console.log('type of sparta', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log(motto);
console.log('type of motto', typeof motto);
