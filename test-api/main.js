/*
var $list = document.querySelector('#user-list');
var $searchForm = document.getElementById('search-form');
var $submitButton = document.querySelector('.submit-button');
var $searchInput = document.getElementById('input');

$submitButton.addEventListener('click', xyz);
$submitButton.addEventListener('click', abc);

function xyz(e) {
  e.preventDefault();
  var inputValue = $searchInput.value;
  $searchForm.reset();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://mempool.space/api/address/' + inputValue);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log('XHR Status: ', xhr.status);
    console.log('XHR Response: ', xhr.response);

    var $listItem = document.createElement('li');
    $listItem.textContent = `Search Address ${xhr.response.address}`;
    $list.appendChild($listItem);

    var $sublist = document.createElement('ul');
    $listItem.appendChild($sublist);

    var funded = xhr.response.chain_stats.funded_txo_sum / 100000000;
    var spent = xhr.response.chain_stats.spent_txo_sum / 100000000;
    let fund$;

    var $addy = document.createElement('li');
    if (funded === spent) {
      fund$ = funded;
      // $addy.textContent = `Total amount of Bitcoin: ${funds}`;
    } else {
      fund$ = funded - spent;
      // $addy.textContent = `Total amount of Bitcoin: ${funds}`;
    }
    $addy.textContent = `Total amount of Bitcoin: ${fund$}`;
    $sublist.appendChild($addy);

    var $type = document.createElement('li');
    $type.textContent = 'Transaction Total ' + xhr.response.chain_stats.tx_count;
    $sublist.appendChild($type);

  });
  xhr.send();
}

function abc(e) {
  e.preventDefault();
  var inputValue = $searchInput.value;
  console.log(inputValue);
  $searchForm.reset();
  var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://mempool.space/api/address/' + inputValue);
  xhr.open('GET', 'https://mempool.space/api/address/' + inputValue + '/txs');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log('XHR Status: ', xhr.status);
    console.log('XHR Response: ', xhr.response);
    for (let i = 0; i < 5; i++) {

      var $listItem = document.createElement('li');
      $listItem.textContent = `Transaction ID: ${xhr.response[i].txid}`;
      $list.appendChild($listItem);

      var $addy = document.createElement('li');
      var $sublist = document.createElement('ul');
      $listItem.appendChild($sublist);
      $addy.textContent = `Block Height: ${xhr.response[i].status.block_height}`;
      $sublist.appendChild($addy);

    }

    // var $sublist = document.createElement('ul');
    // $listItem.appendChild($sublist);

    // var funded = xhr.response.chain_stats.funded_txo_sum / 100000000;
    // var spent = xhr.response.chain_stats.spent_txo_sum / 100000000;
    // let fund$;

    // var $addy = document.createElement('li');
    // if (funded === spent) {
    //   fund$ = funded;
    // } else {
    //   fund$ = funded - spent;

    // }
    // $addy.textContent = `Total amount of Bitcoin: ${fund$}`;
    // $sublist.appendChild($addy);

    // var $type = document.createElement('li');
    // $type.textContent = 'Transaction Total ' + xhr.response.chain_stats.tx_count;
    // $sublist.appendChild($type);

  });
  xhr.send();
}
*/
/*
var $list = document.querySelector('#user-list');
var $searchForm = document.getElementById('search-form');
var $submitButton = document.querySelector('.submit-button');
var $searchInput = document.getElementById('input');

$submitButton.addEventListener('click', xyz);
// $submitButton.addEventListener('click', abc);

function xyz(e) {
  e.preventDefault();
  var inputValue = $searchInput.value;
  $searchForm.reset();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://mempool.space/api/address/' + inputValue);
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log('XHR Status: ', xhr.status);
    console.log('XHR Response: ', xhr.response);

    var $listItem = document.createElement('li');
    $listItem.textContent = `Search Address ${xhr.response.address}`;
    $list.appendChild($listItem);

    var $sublist = document.createElement('ul');
    $listItem.appendChild($sublist);

    var funded = xhr.response.chain_stats.funded_txo_sum / 100000000;
    var spent = xhr.response.chain_stats.spent_txo_sum / 100000000;
    let fund$;

    var $addy = document.createElement('li');
    if (funded === spent) {
      fund$ = funded;
      // $addy.textContent = `Total amount of Bitcoin: ${funds}`;
    } else {
      fund$ = funded - spent;
      // $addy.textContent = `Total amount of Bitcoin: ${funds}`;
    }
    $addy.textContent = `Total amount of Bitcoin: ${fund$}`;
    $sublist.appendChild($addy);

    var $type = document.createElement('li');
    $type.textContent = 'Transaction Total ' + xhr.response.chain_stats.tx_count;
    $sublist.appendChild($type);

  });
  xhr.send();
}
*/
// fetch('https://mempool.space/api/address/1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv/txs')
//   .then(res => res.json())
//   .then(users => console.log(users))
//   .catch(err => console.log('Fetch failed!', err));

// fetch('https://mempool.space/api/address/1wiz18xYmhRX6xStj2b9t1rwWX4GKUgpv')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log('Fetch failed!', err));

// var $list = document.querySelector('#user-list');

// .then(([data1, data2]) => console.log(data1, data2));

/*
function limiter(n) {
  if (n === 6) {
    return 3;
  } else {
    return 3 * limiter(n + 1);
  }
}
*/
function getPrice() {
  var price = 'https://api.coincap.io/v2/assets/bitcoin';

  fetch(price)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.data);
      // console.log(data.data.marketCapUsd);
      // console.log(data.data.supply);
      // console.log(data.data.volumeUsd24Hr);
      // console.log(data.data.changePercent24Hr);
    });
}

getPrice();
