var $clicks = 0;

var clickCount = document.querySelector('.click-count');

var hotButton = document.querySelector('.hot-button');

hotButton.addEventListener('click', counter);
function counter(event) {
  $clicks++;
  clickCount.textContent = 'Clicks: ' + $clicks;
  if ($clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if ($clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if ($clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if ($clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if ($clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}
