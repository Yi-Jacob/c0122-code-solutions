var $click = document.querySelector('.task-list');
$click.addEventListener('click', check);

function check(event) {
  console.log('Event Target:', event.target);
  console.log('Target TagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    closest.remove();
  }
}
