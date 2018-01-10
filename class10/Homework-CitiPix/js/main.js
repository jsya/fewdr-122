/*Pseudo Code*/

//User enters a city into city-type text field
  //When Update button is pressed
    //value in text field compared to list he image names
//If entered text matches with an image name
  //background image will be changed to image with text field value
//If no match,
  //background image will go default
  //Message will appear that there is no match

$('#submit-btn').on('click', updateCity);

function updateCity() {
      var ccity = $('#city-type').val();
      //alert(ccity);
      $('body').addClass('nyc');

      return ccity;
}




/*
      if (ccity==="nyc") {
        $('body').addClass("nyc")
      }

cityselect=  getcityval();
console.log(cityselect);

if (ccity==="nyc") {
  $('body').css
}

*/
