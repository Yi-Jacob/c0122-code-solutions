// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Fetch failed!', err));

// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Fetch failed!', err));

// Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/users'),
//   fetch('https://pokeapi.co/api/v2/pokemon/1')
// ]).then(async ([aa, bb]) => {
//   const a = await aa.json();
//   const b = await bb.json();
//   return [a, b];
// })
//   .then(responseText => {
//     console.log(responseText);

//   }).catch(err => {
//     console.log(err);
//   });

Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(console.log('test')),
  fetch('https://pokeapi.co/api/v2/pokemon/1').then(resp => resp.json()),
  fetch('https://jsonplaceholder.typicode.com/todos/3').then(resp => resp.json())
]).then(console.log);
