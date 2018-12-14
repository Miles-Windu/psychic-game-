// List out the options that the computer can choose from and the user's choice.
//==============================================================================================
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 



// Create variables to identify the statistics of the game. 
//==============================================================================================
var wins = 0; 
var losses = 0; 
var guessNumber = 10; 
var letters = []; 
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerLetter); 

// Establish the onkeyup funtion determining what the user presses on the keyboard
document.onkeyup = function(event) {
    
    console.log(computerLetter); 
    // If the computer choice is an exact match to the keypress of the user then... 
    // ===========================================================================================
    if (computerLetter === event.key) {
        
        // add 1 to the value of "wins"
        wins++; 
        
        // reset the guess number back to 9
        guessNumber = 9; 
        
        // empty the array displaying the letters already guessed 
        letters = []; 
        computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
    // display the scores or new scores 
    $("#wins-text").text("Wins: " + wins); 
    $("#losses-text").text("Losses: " + losses);
    $("#remaining-guesses").text("Guesses Left: " + guessNumber);
    $("#already-guessed").text("Your Guesses So Far: " + letters);
 
}

// If the user uses all of their guesses before they match the computer 
// ===========================================================================================
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

    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}

// If the user guess does not match the computer guess 
// ===========================================================================================
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
// =========================================================================================== 
if (wins === 10) {

    //Reset all statistics for the next game
    wins = 0; 
    losses = 0;
    guessNumber = 9;    
    letters = []; 

    // Victory Message 
    alert("Congratulations!! You're a mind reader! Press another key to begin again!");
}

// If the user reaches 10 losses then the game is over with a "Try Again" message. 
// ===========================================================================================
if (losses === 10) {

    // Reset all statistics for the next game
    wins = 0; 
    losses = 0;
    guessNumber = 9; 
    letters = [];

    // Defeat message 
    alert("Better luck next time... press another key to begin the game again!");
}

}




