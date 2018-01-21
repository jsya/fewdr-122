
console.log("test")


//Create an Array of images, there are 6 food pics, and an empty array of scores.
var foodPics = ["images/food1.jpg", "images/food2.jpg" , "images/food3.jpg" , "images/food4.jpg" , "images/food5.jpg", "images/food6.jpg"];
var foodScore = new Array(6);

//Back: -1 unless 0; skip or click dropdown score: +1
var imageNumber=0;

///3 ways to change image function (Back button, skip button, or click score from dropdown menu)

$('#your-vote').on('change', function() {

     event.preventDefault();
     var optionScore = $(this).val();

     console.log(optionScore);
     foodScore[imageNumber]=optionScore;

     var imageNumbertemp = imageNumber+1;
     imageNumber=Math.min(5, imageNumbertemp);

      $('#image-to-vote-on').attr("src", foodPics[imageNumber]);
      var aveScore=9.9999;
      if (imageNumber==5) {
            $("#last-pic").html("You have reached the end. Total deliciousness score was: " + aveScore);
      }

     console.table(foodScore);
});


//-------------Button functions----------------

$('.btn').on('click', function() {

     event.preventDefault();
     var backskip = $(this).val();

   //Back Button

     if (backskip==="Back") {
        var imageNumbertemp = imageNumber-1;
        imageNumber=Math.max(0, imageNumbertemp);
        $('#image-to-vote-on').attr("src", foodPics[imageNumber]);

    }

     //Skip button

     if (backskip==="Skip") {

       var imageNumbertemp = imageNumber+1;
       imageNumber=Math.min(5, imageNumbertemp);

        $('#image-to-vote-on').attr("src", foodPics[imageNumber]);
      }

      //If ImageIndex=5, calculate the average scor
        var aveScore=9.9999;
      if (imageNumber==5) {
          //var aveScore=foodScore.sum()/foodScore.length;
            $("#last-pic").html("You have reached the end. Total deliciousness score was: " + aveScore);

      }
        console.log(backskip);
        console.log(imageNumber);
        console.log(aveScore);

});





  //No score, goes to next indexed picture



//#your-vote, save chosen number to scoreArray that matches same index as the image
