const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = number => {
  return number * 2;
};
const newValues = numbers.map(doubled);
console.log(`Values of Doubled ${newValues}`);

const prices = number => {
  return `$${number.toFixed(2)} `;
};
const newPrice = numbers.map(prices);
console.log(`Prices: ${newPrice}`);

const upperCased = languages.map(name =>
  name.toUpperCase()
);
console.log(`Uppercased languages: ${upperCased}`);

const firstLetters = languages.map(name =>
  name[0]
);
console.log(`First letters of Languages ${firstLetters}`);
