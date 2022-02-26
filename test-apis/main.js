var $list = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {

  for (var i = 0; i < xhr.response.length; i++) {
    var $listItem = document.createElement('li');
    $listItem.textContent = xhr.response[i].name;
    $list.appendChild($listItem);
  }
}
);
xhr.send();
