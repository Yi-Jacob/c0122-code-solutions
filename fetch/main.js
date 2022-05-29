
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log('Fetch failed!', err));

// import mempoolJS from '@mempool/mempool.js';

// const init = async () => {

//   const { bitcoin: { addresses } } = mempoolJS({
//     hostname: 'mempool.space'
//   });

//   const address = '1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv';
//   const myAddress = await addresses.getAddress({ address });
//   console.log(myAddress);

// };
// init();

// fetch('https://blockchain.info/rawaddr/bc1q8ea6w5tvs458u7r6u5n88ggzhkk0hmedpgnu9z')
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

// Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(console.log('test')),
//   fetch('https://pokeapi.co/api/v2/pokemon/1').then(resp => resp.json()),
//   fetch('https://jsonplaceholder.typicode.com/todos/3').then(resp => resp.json())
// ]).then(console.log);
