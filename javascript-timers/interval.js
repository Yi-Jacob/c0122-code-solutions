var $countdown = document.querySelector('.countdown-display');
var count = 4;
var intervalID = setInterval(function () {
  $countdown.textContent = count;
  count--;
  if (count === -1) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
