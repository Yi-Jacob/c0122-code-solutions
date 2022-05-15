// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Fetch failed!', err));

// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Fetch failed!', err));

import mempoolJS from '@mempool/mempool.js';

const init = async () => {

  const { bitcoin: { addresses } } = mempoolJS({
    hostname: 'mempool.space'
  });

  const address = '1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv';
  const myAddress = await addresses.getAddress({ address });
  console.log(myAddress);

};
init();
