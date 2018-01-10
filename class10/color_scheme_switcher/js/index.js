
//$(document)

//document.getElementById('grayButton').onclick = switchGray;
$('#grayButton').on('click', switchGray);

//document.getElementById('whiteButton').onclick = switchWhite;
$('#whiteButton').on('click', switchWhite);


function switchGray() {
  // document.body.style.backgroundColor = 'gray';
  // document.body.style.color = 'white';

  $('body').css('backgroundColor', 'gray');
  $('body').css('color', 'white');

  //$('body').css({backgroundColor: 'gray', color: 'white'});

}

function switchWhite() {
  // document.body.style.backgroundColor = 'white';
  // document.body.style.color = 'black';

  $('body').css('backgroundColor', 'white');
  $('body').css('color', 'black');

}



/* toggle class

$('#grayButton').on('click', toggleGray);
function toggleGray() {
  // document.body.style.backgroundColor = 'gray';
  // document.body.style.color = 'white';

  $('body').toggleClass('background-gray');

  //$('body').css({backgroundColor: 'gray', color: 'white'});

}
