/*
var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelector('.tab');
var $view = document.querySelector('.view');

$tabContainer.addEventListener('click', check);

function check(event) {
  event.target.matches('.tab');
  var target = event.target.getAttribute('data-view');

  for (var i = 0; i < $tab.length; i++) {
    if (event.target === $tab[i]) {
      $tab[i].classList.add('active');
      $view[i].classList.add('active');
    } else {
      $tab[i].classList.remove('active');
      $view[i].classList.remove('active');
    }
  }

  for (var i = 0, i < $view.length; i++) {

  }
}
*/

var $tab = document.querySelectorAll('.tab');

var $tabContainer = document.querySelector('.tab-container');
$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  var $data = event.target.getAttribute('data-view');
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  var $view = document.querySelectorAll('.view');
  for (var x = 0; x < $view.length; x++) {
    if ($view[x].dataset.view !== $data) {
      $view[x].className = 'view hidden';
    } else {
      $view[x].className = 'view';
    }
  }
}
