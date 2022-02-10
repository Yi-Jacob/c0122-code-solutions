var $witch = document.querySelector('.switch');
$witch.addEventListener('click', onOff);

function onOff(event) {
  if ($witch.className === '.switch on') {
    $witch.className = '.switch off';
  } else {
    $witch.className = '.switch on';
  }
}
