var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;
    }
    
    
    if (computerGuess === userGuess) {
        wins++
        guessesLeft = 10;
        guessesSoFar = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    
//    if (userGuess === computerGuess) {
//        wins++
//    }
//    
//    else {
//        guessesLeft = guessesLeft - 1
//        
//        if (guessesLeft === 0) {
//            losses++
//            guessesLeft = 10;
//        }
//    }
    
    var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + guessesSoFar + "</p>";

    document.querySelector("#game").innerHTML = html;
};
