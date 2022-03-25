var $openModal = document.querySelector('.open');
$openModal.addEventListener('click', handleModalOpen);

var $closeModal = document.querySelector('.close');
$closeModal.addEventListener('click', handleModalClose);

var $onOff = document.querySelector('.no');

function handleModalOpen(event) {
  $onOff.className = 'modal no';
}

function handleModalClose(event) {
  $onOff.className = 'modal no no-display';
}
