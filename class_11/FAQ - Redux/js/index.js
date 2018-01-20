// function toggleAnswer1() {
//   $('#answer1').slideToggle();
// }
// function toggleAnswer2() {
//   $('#answer2').slideToggle();
// }
// function toggleAnswer3() {
//   $('#answer3').slideToggle();
// }
//
// $('#answer1').hide();
// $('#answer2').hide();
// $('#answer3').hide();
//
// $('#question1').click(toggleAnswer1);
// $('#question2').click(toggleAnswer2);
// $('#question3').click(toggleAnswer3);


/*the problem with the code above is that it is inefficient*/

//Figure out what am I listening to?  I want to listen to all the divs

/*
$('.faq-section').on('click', toggleAnswer);

function toggleAnswer() {


}
*/



//Brian likes anonymous functions beause know where logic lives
$('.faq-section').on('click', function() {
  //specify
  $(this).children('p').slideToggle();
});
