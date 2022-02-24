var $imageList = document.querySelectorAll('.img');
var $dots = document.querySelector('.dots');
var $sizeList = document.querySelectorAll('.i');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');

$dots.addEventListener('click', dataView);
$left.addEventListener('click', handleLeft);
$right.addEventListener('click', handleRight);

var counter = 1;
var imgArray = ['img1', 'img2', 'img3', 'img4', 'img5'];

function handleLeft(event) {
  if (counter === 1) {
    counter = 6;
  }
  counter = counter - 1;
  handleSwap(imgArray[counter - 1], 3000);
  stopInterval();
}

function handleRight(event) {
  if (counter === 5) {
    counter = 0;
  }
  handleSwap(imgArray[counter], 3000);
  counter++;
  stopInterval();
}

function stopInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}

function carousel(event) {
  if (counter === 5) {
    handleSwap(imgArray[counter]);
    counter = 0;
  }
  handleSwap(imgArray[counter]);
  counter++;
}

var intervalID = setInterval(carousel, 3000);

function dataView(event) {
  var $dataView = event.target.getAttribute('data-view');
  if (event.target.nodeName === 'I' && $dataView !== '') {
    handleSwap($dataView);
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i] === $dataView) {
        counter = i + 1;
      }
    }
    stopInterval();
  }
}

function handleSwap(string) {
  for (var i = 0; i < $imageList.length; i++) {
    if ($imageList[i].dataset.view !== string) {
      $imageList[i].className = 'image hidden';
      $sizeList[i].className = 'i size far fa-circle';
    } else {
      $imageList[i].className = 'image';
      $sizeList[i].className = 'i size fas fa-circle';
    }
  }
}
