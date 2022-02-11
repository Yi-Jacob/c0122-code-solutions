var $open = document.querySelector('.open-modal');
$open.addEventListener('click', popup);

var $no = document.querySelector('.no-button');
$no.addEventListener('click', windowOnClick);

var $modal = document.querySelector('.modal');
$modal.addEventListener('click', windowOnClick);

function popup(event) {
  event.target.className('yes-modal');
}

function windowOnClick(event) {
  if (event.target === $modal) {
    popup();
  }
}
