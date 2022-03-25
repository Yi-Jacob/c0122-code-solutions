var $list = document.querySelector('#user-list');
var city = 'huntington beach';

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.openbrewerydb.org/breweries?by_city=' + city);
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  // console.log('XHR Status: ', xhr.status);
  // console.log('XHR Response: ', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {

    var $listItem = document.createElement('li');
    $listItem.textContent = xhr.response[i].name;
    $list.appendChild($listItem);

    var $sublist = document.createElement('ul');
    $listItem.appendChild($sublist);

    var $addy = document.createElement('li');
    $addy.textContent = xhr.response[i].street;
    $sublist.appendChild($addy);

    var $type = document.createElement('li');
    $type.textContent = 'Brewery Type: ' + xhr.response[i].brewery_type;
    $sublist.appendChild($type);

    var $websiteUrl = document.createElement('li');
    $websiteUrl.textContent = '';
    $sublist.appendChild($websiteUrl);

    var $anchor = document.createElement('a');
    if (xhr.response[i].website_url !== null) {
      $anchor.setAttribute('href', xhr.response[i].website_url);
      $anchor.textContent = 'Website';
      $websiteUrl.appendChild($anchor);
    } else {
      $anchor.textContent = 'No Website available';
      $websiteUrl.appendChild($anchor);
    }
  }
}
);
xhr.send();
