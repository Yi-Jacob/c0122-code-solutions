var $clicked = document.querySelector('.click-button');
$clicked.addEventListener('click', handleClick, true);
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event target:', $clicked);
}

var $mouse = document.querySelector('.hover-button');
$mouse.addEventListener('mouseover', handleMouseover, true);
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event target:', $mouse);
}

var $dblclick = document.querySelector('.double-click-button');
$dblclick.addEventListener('dblclick', handleDoubleClick, true);
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log('event target:', $dblclick);
}
