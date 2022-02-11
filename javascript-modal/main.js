var $openModal = document.querySelector('.modal-button');
$openModal.addEventListener('click', handleModalOpen);

var $closeModal = document.querySelector('.close-modal');
$closeModal.addEventListener('click', handleModalClose);

var $onOff = document.querySelector('.onOff');

function handleModalOpen(event) {
  $onOff.className = 'modal onOff';
}

function handleModalClose(event) {
  $onOff.className = 'modal onOff no-display';
}
