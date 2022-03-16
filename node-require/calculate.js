const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === '+') {
  console.log('Sum:', add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === '/') {
  console.log('Quotient:', divide(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'x') {
  console.log('Product:', multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === '-') {
  console.log('Difference:', subtract(process.argv[2], process.argv[4]));
} else {
  console.log('Please use either; +, -, x or / in your expression');
}
