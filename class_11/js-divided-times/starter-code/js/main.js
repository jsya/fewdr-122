console.log("test");
//Psuedo Code
//
//
//On hover over nav class, shade gray
//
//If a nav class is clicked and not already open
//    1. change nav button to gray
//   2. Slide down gray section of relevant news items #slide-down and id topic

//when clicks a li child of the <ul id="primary-nav">, show the slide-down div and the matching id section
//if slide-down is already displayed, dont need to do another slide down, just switch divs

var slideStatus=0;

$('#primary-nav a').on('click', function() {

  var slideStatus += 1;

  topicid = $(this).attr("href");
  
  console.log(topicid);

  $('.drop').css("display", "none");
  $(topicid).css("display","block");

  $('#slide-down').slideDown();



});


// If I click the link that was already open, slide up
//
//         Add a click even to the individual lis.
//         That click event should add the drop down class id ""-drop, then show the id-""-drop from #slide-down
//         if gray section already down, just update
//
//   3. Re-clicked, slide up the gray section, and back to white default
//
//
//
