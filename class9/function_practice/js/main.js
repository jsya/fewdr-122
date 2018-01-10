console.log("check")

//within a function songPlaying

// Make a song name
// Make an artist name

//display song and song artist in my html blue section id="nowplaying"


function songPlaying(s, a) {

  $("#nowplaying").html("Now Playing: " + s + " by " + a);

}

var song = "3 is a Magic Number";
var artist = "Schoolhouse Rock";

//songPlaying(song, artist);
songPlaying("A", "B");



function sayHello(n) {

  $(".greeting").html("Hello " + n);

}

sayHello("Name");
