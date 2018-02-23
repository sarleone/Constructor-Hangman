// GLOBAL VARIABLES 
// =========================================================================

// REQUIRE WORD FOLDER AND PROMPT
var Word = require('./Word.js');
var prompt = require('prompt');

var guesses = [];
var wordInPlay = new Word(this.words[Math.floor(Math.random() * this.words.length)]);
var word = new Word(wordInPlay);
var numGuesses = 10;

//Prompts the user to guess and keeps track of the user's remaining guesses
prompt.start();
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!" 
);

// var property = {
//     name: 'yesno',
//     message: 'Are you ready to play?!',
//     validator: /y[es]*|n[o]?/,
//     warning: 'Must respond yes or no',
//     default: 'no'
//   };
//   //
//   // Get the simple yes or no property
//   //
//   prompt.get(property, function (err, result) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  result: ' + result.yesno);
//   //});
//   if (result.yesno === "y" || "yes") {

//   }

// FUNCTIONS
// =========================================================================
game = {
    //Randomly selects a word and uses Word constructor to store it
    words: ["hola", "gustar", "caliente", "fuego", "fiesta", "cerveza", "caramba",
    "bonito", "querer"],
    winCounter: 0,
    numGuesses: 0,
    lossCounter: 0,
    wrongGuesses: [],

    startGame: function(word) {
        this.numGuesses = 10;

        //this.blanksAndSuccess = this.wordInPlay.;
        this.wrongGuesses = [];
        //this.promptUser();
        //testing
        console.log(this.wordInPlay);
;
    }
}


// How we start the game
function startGame() {
    // Debugging
    console.log("*************");

}

// MAIN PROCESS 
// =========================================================================
game.startGame();