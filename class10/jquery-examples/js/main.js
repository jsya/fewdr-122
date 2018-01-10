$(document).ready(function(){

  //Part 1
  //change lead text
  $('.lead').text('New text');

//**Bonus: change the font-size to 24px and change the color to #e76732
$('.lead').css('fontSize', '24px');
$('.lead').css('color', '#e76732');

  //set value of input field in the form
  $('#set-value').val("Brian");

//Bonus: After setting the value get the value and console.log it's double


  //change image: https://source.unsplash.com/random
  $('#showRandom').attr('src', 'https://source.unsplash.com/random');

//Bonus add the class "random" ti tgus unage abd style random to rotate: look up css styles transform and transistion

  //change style background-color
  $('body').css('background-color', 'gray');


  //Part 2
  //add class to caption
  //$('figcaption').addClass('figure-caption');


  //Part 3 Animate and move
  //slide figure Up

  $('figure').on('click', function() {
      $('figure').slideUp(300);

  });

  //Part 4
  //When user clicks on h1 change the text of the lead



$('h1').on('click', textChange);
function textChange() {
    $('.lead').text('New new text');
    $('.lead').css('fontSize', '24px');
    $('.lead').css('color', '#e76732');
}

})
