// var $right = document.querySelector('.right');
// var $left = document.querySelector('.left');
// var $dot = document.querySelector('.dots');
// var $img = document.getElementById('img');
// var $image = document.querySelector('img');

// var imgArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
// var counter = 0;
// var intervalID = setInterval(changeIMG, 3000);
// function changeIMG() {
//   for (var i = 0; i < imgArray.length; i++) {
//     $image.src = imgArray[i];
//     setInterval(changeIMG, 3000);
//   }
// }

// $next.addEventListener('click', nextImg);
// function nextImg() {
//   if (counter === 5) {
//     counter = 0;
//   }
//   handleSwap(imgArray[counter], 3000);
//   counter++;
//   clearInterval();
// }

// $previous
// var $countdown = document.querySelector('.countdown-display');
// var count = 4;
// var intervalID = setInterval(function () {
//   $countdown.textContent = count;
//   count--;
//   if (count === -1) {
//     $countdown.textContent = '~Earth Beeeelooowww Us~';
//     clearInterval(intervalID);
//   }
// }, 1000);

// $img.addEventListener('click', function () {
//   console.log('test');
// });

// $dot.addEventListener('click', function () {
//   console.log('test');
// });

// $next.addEventListener('click', function () {
//   console.log('test');
// });

// $previous.addEventListener('click', function () {
//   console.log('test');
// });

// var $image = document.querySelector('.current');
// var $hidden = document.querySelector('.hidden');

// var intervalID = setInterval(changeIMG, 3000);

// function changeIMG() {
//   $image.className = 'hidden';
//   clearInterval(intervalID);
// }

// var $countdown = document.querySelector('.countdown-display');
// var count = 4;
// var intervalID = setInterval(function () {
//   $countdown.textContent = count;
//   count--;
//   if (count === -1) {
//     $countdown.textContent = '~Earth Beeeelooowww Us~';
//     clearInterval(intervalID);
//   }
// }, 1000);

var $imageList = document.querySelectorAll('.img');
var $circle = document.querySelector('.dots');
var $sizeList = document.querySelectorAll('.size');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');

$circle.addEventListener('click', dataView);
$left.addEventListener('click', handleLeft);
$right.addEventListener('click', handleRight);

var counter = 1;
var pokemon = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

function handleLeft(event) {
  if (counter === 1) {
    counter = 6;
  }
  counter = counter - 1;
  handleSwap(pokemon[counter - 1], 3000);
  stopInterval();
}

function handleRight(event) {
  if (counter === 5) {
    counter = 0;
  }
  handleSwap(pokemon[counter], 3000);
  counter++;
  stopInterval();
}

function stopInterval() {
  clearInterval(intervalID);
  intervalID = setInterval(carousel, 3000);
}

function carousel(event) {
  if (counter === 5) {
    handleSwap(pokemon[counter]);
    counter = 0;
  }
  handleSwap(pokemon[counter]);
  counter++;
}

var intervalID = setInterval(carousel, 3000);

function dataView(event) {
  var $dataView = event.target.getAttribute('data-view');
  if (event.target.nodeName === 'I' && $dataView !== '') {
    handleSwap($dataView);
    for (var i = 0; i < pokemon.length; i++) {
      if (pokemon[i] === $dataView) {
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
      $sizeList[i].className = 'size far fa-circle';
    } else {
      $imageList[i].className = 'image';
      $sizeList[i].className = 'size fas fa-circle';
    }
  }
}
