function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $name = document.querySelector('#user-name');
$name.addEventListener('focus', handleFocus);

var $email = document.querySelector('#user-email');
$email.addEventListener('blur', handleBlur);

var $message = document.querySelector('#user-message');
$message.addEventListener('input', handleInput);
