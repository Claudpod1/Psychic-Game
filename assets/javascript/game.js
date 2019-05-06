 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
//  var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var lettersGuess = [];
 var wins = 0;
 var losses = 0;
 var guesses = 12;


 var userChoiceText = document.getElementById("userchoice-text");
 var computerChoiceText = document.getElementById("computerchoice-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesText = document.getElementById("guess-text");
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//  updateWins();
//  updatelosses();



 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;


console.log(computerGuess);
console.log(userGuess);



     if (userGuess === computerGuess) {
        wins++;
        restart ();

     } else if (guesses > 0) { 
         guesses--;
         lettersGuess.push(userGuess);


     } else {
        losses++;
        restart ();
     }

     userChoiceText.textContent = lettersGuess;
    
     winsText.textContent =  wins;
     lossesText.textContent = losses;
     guessesText.textContent = guesses;
     //userguess.textContent = userGuess;
     
    };

    function restart () {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guesses = 12;
        lettersGuess= [];

    };

