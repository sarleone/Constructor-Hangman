// GLOBAL VARIABLES 
// =========================================================================

// REQUIRE WORD FOLDER AND PROMPT
var Word = require('./Word.js');
var prompt = require('prompt');

// // Solution will be held here
// var chosenWord = "";
// // This will break the solution into individual letters to be stored
// var lettersInChosenWord = [];
// // This will be the number of blanks we show based on the solution
// var numBlanks = 0;
// // Holds a mix of blank and solved letters
// var newGame = new Word(chosenWord);

// // Holds all of the wrong guesses
// var wrongGuesses = [];

// // Game counters
// var winCounter = 0;
// var lossCounter = 0;
// var numGuesses = 10;



//Prompts the user to guess and keeps track of the user's remaining guesses

prompt.start();
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!" + 
"\nReady to get started? (Y/N)");

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
        this.wordInPlay = new Word(this.words[Math.floor(Math.random() * this.words.length)]);
        this.blanksAndSuccess = new Word(showLetters(this.wordInPlay));
        this.wrongGuesses = [];
        this.promptUser();
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
startGame();