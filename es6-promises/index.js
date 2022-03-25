const takeAChance = require('./take-a-chance');

const newPromise = takeAChance('Jacob');

newPromise.then(value => {
  console.log(value);
});

newPromise.catch(error => {
  console.error(error.message);
});
