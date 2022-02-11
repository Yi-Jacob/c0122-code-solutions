var $button = document.querySelector('button');
var $body = document.querySelector('body');
var $click = document.querySelector('.click');

$click.addEventListener('click', $switch);

var check = true;

function $switch(event) {
  var change = '';
  if (check === true) {
    change = 'light';
    check = false;
  } else if (check === false) {
    change = 'dark';
    check = true;
  }
  $button.className = 'click ' + change;
  $body.className = change;
}
