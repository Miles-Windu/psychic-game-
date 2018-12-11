// List out the options that the computer can choose from and the user's choice.
//==============================================================================================
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 



// Create variables to identify the statistics of the game. 
//==============================================================================================
var wins = 0; 
var losses = 0; 
var guessNumber = 10; 
var letters = []; 


// The loop that goes through the array of computer choices for the length of the Array. 
for (i = 0; i < computerChoices.length; i++);

// Have the computer choose a random element from the Array 
var computerLetter = Math.floor(Math.random() * computerChoices.length); 
console.log(computerChoices[computerLetter]); 

// Establish the onkeyup funtion determining what the user presses on the keyboard
document.onkeyup = function(event) {

// If the computer choice is an exact match to the keypress of the user then... 
if (computerChoices[computerLetter] === event.key) {
    // add 1 to the value of "wins"
    wins++; 
    // reset the guess number back to 9
    guessNumber = 9; 
    // empty the array displaying the letters already guessed 
    letters = []; 
    // display the scores or new scores 
    $("#wins-text").text("Wins: " + wins); 
    $("#losses-text").text("Losses: " + losses);
    $("#remaining-guesses").text("Guesses Left: " + guessNumber);
    $("#already-guessed").text("Your Guesses So Far: " + letters);
}
// If the user uses all of their guesses before they match the computer 
else if (guessNumber < 2){
    // add 1 to the total losses 
    losses++; 
    // reset the guess number back to 9 
    guessNumber = 9; 
    // empty the array displaying the letters already guessed 
    letters = [];
    // display the current and new scores 
    $("#wins-text").text("Wins: " + wins); 
    $("#losses-text").text("Losses: " + losses);
    $("#remaining-guesses").text("Guesses Left: " + guessNumber);
    $("#already-guessed").text("Your Guesses So Far: " + letters);
}
// If the user guess does not match the computer guess 
else {
    // Reduce the number of guesses the user has left
    guessNumber--; 
    // add the letter that was guessed incorrectly into the empty array to be displayed  
    letters.push(event.key);

    // Display current and new scores
    $("#wins-text").text("Wins: " + wins); 
    $("#losses-text").text("Losses: " + losses);
    $("#remaining-guesses").text("Guesses Left: " + guessNumber);
    $("#already-guessed").text("Your Guesses So Far: " + letters);
}

// If the user reaches 10 wins then the game is over with a victory! 
if (wins === 10) {

    //Reset all statistics for the next game
    wins = 0; 
    losses = 0;
    guessNumber = 9;    
    letters = []; 
    // Victory Message 
    alert("Congratulations!! You're a mind reader!");
}
if (losses === 10) {

    // Reset all statistics for the next game
    wins = 0; 
    losses = 0;
    guessNumber = 9; 
    letters = [];
    // Defeat message 
    alert("Better luck next time... ");
}

}




