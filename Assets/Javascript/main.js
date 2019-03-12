var userGuessarr = [];
var allLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var guesses = 15;
var userGuessesText = document.getElementById("userguesses-text");
var allGuessesText = document.getElementById("allguesses-text");
var guessesText = document.getElementById("guesses-text");
var computerGuess = allLetters[Math.floor(Math.random() * allLetters.length)];
function resetFunction(event) {
    guesses = 15;
    userGuessarr = [];

}
document.onkeyup = function (event) {





    var userGuess = event.key;
    userGuessarr.push(userGuess);

    if (userGuess === computerGuess) {
        alert('You Win!!! The letter was:' + userGuess);
        resetFunction();
    }
    else if (userGuess !== computerGuess) {
        alert('Not right Try agian')
        guesses--;
    }
    if (guesses === 0) {
        alert('You Lose!!!')
        resetFunction();
    }


    userGuessesText.textContent = "User Guess: " + userGuess;
    allGuessesText.textContent = "Your Guesses: " + userGuessarr;
    guessesText.textContent = "Guesses Left: " + guesses;

};