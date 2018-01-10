console.log("hey");
/*------------------------------------------------------------------------------
Prompt: Do you want to play?
  //If Yes
    //Prompt: 1 or 2 person game
      //if 1 person game, person 2 is randomized
        //Decision Tree
          //Prompt Winner
      //if 2 person game, person 1 chooses first, then person 2
        Decision of who wins:
          Two players A & B
          if A=rock, B= scissor,  A wins
          if A=rock, B= paper, B wins
          if A=rock, B=rock, tie

          if A=scissor, B= scissor, tie
          if A=scissor, B= paper, A wins
          if A=scissor, B=rock, B wins


          if A=paper, B= scissor, B wins
          if A=paper, B= paper, tie
          if A=paper, B=rock, A wins

            //prompt winner

   //If No
    //Exit
------------------------------------------------------------------------------*/

function rockPaperScissors(A, B) {

  if (A===B) {
    alert("Tie");
  }

   if ((A==="Rock" && B==="Scissors") || (A==="Scissors" && B==="Paper")  || (A==="Paper" && B==="Rock")) {
     alert("Player A wins");
   }

   if ((B==="Rock" && A==="Scissors") || (B==="Scissors" && A==="Paper")  || (B==="Paper" && A==="Rock")) {
     alert("Player B wins");
   }

}


var playerA="Scissors";
var playerB="Paper";
rockPaperScissors(playerA, playerB);










//
