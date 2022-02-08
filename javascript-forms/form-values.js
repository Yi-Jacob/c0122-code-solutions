var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', submit);
function submit(event) {
  event.preventDefault();
  var object = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('Object:', object);
  return object;
}
