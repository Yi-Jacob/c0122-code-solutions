var count = 0;
var underline = 'underline';
var $span = document.querySelectorAll('span');

document.addEventListener('keydown', typing);

function typing(event) {
  if ($span[count].innerText === event.key) {
    $span[count].className = 'correct';
    count++;
    $span[count].className = underline;
  } else {
    $span[count].className = 'wrong ' + underline;
  }
}
