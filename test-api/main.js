var $list = document.querySelector('#user-list');
// var city = 'huntington beach';

var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://mempool.space/api/address/3Bs39s2zNpoTU6sbUTaKXdaU8PuPXm2koN');
xhr.open('GET', 'https://blockchain.info/rawaddr/bc1qeqc2p6p2qlplzx7zaf0dfxzd76976pgda0unqh');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  // console.log('XHR Status: ', xhr.status);
  // console.log('XHR Response: ', xhr.response);

  var $listItem = document.createElement('li');
  $listItem.textContent = `Search Address ${xhr.response.address}`;
  $list.appendChild($listItem);

  var $sublist = document.createElement('ul');
  $listItem.appendChild($sublist);

  var $addy = document.createElement('li');
  var funds = xhr.response.chain_stats.funded_txo_sum / 1000000000;
  $addy.textContent = `Total amount of Bitcoin: ${funds}`;
  $sublist.appendChild($addy);

  var $type = document.createElement('li');
  $type.textContent = 'Transaction Total ' + xhr.response.chain_stats.tx_count;
  $sublist.appendChild($type);

  // var $websiteUrl = document.createElement('li');
  // $websiteUrl.textContent = '';
  // $sublist.appendChild($websiteUrl);
}

);
xhr.send();
