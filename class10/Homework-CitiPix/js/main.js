/*Pseudo Code*/

//User enters a city into city-type text field
  //When Update button is pressed
    //value in text field compared to list he image names
//If entered text matches with an image name
  //background image will be changed to image with text field value
//If no match,
  //background image will go default
  //Message will appear that there is no match

$(document).ready(function() {

  $('#submit-btn').on('click', updateCity);

  function updateCity() {
        event.preventDefault();

        var ccity = $('#city-type').val();

        //alert(ccity);
        $('body').removeClass().addClass(ccity);

        return ccity;

        event.preventDefault();
  }

});
