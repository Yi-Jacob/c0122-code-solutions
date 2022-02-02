var num1 = 99;
var num2 = 111;
var num3 = 112;

var maximumValue = (Math.max(num1, num2, num3));
console.log('Max Value:', maximumValue);

var heroes = ['flash', 'batman', 'ironman', 'green lantern'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

var library = [
  {
    title: 'Alphabet',
    author: 'ABC'
  },
  {
    title: 'Numbers',
    author: '123'
  },
  {
    title: 'Symbols',
    author: '!@#'
  }
];
var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Jacob Yi';
var firstAndLastName = fullName.split(' ');
console.log('First and LastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Uppercase Name:', sayMyName);
