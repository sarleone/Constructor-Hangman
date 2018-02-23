// GLOBAL VARIABLES 
// =========================================================================
// REQUIRE WORD FOLDER AND READLINE
var Word = require('./Word.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Game variables
var words = ["hola", "gustar", "caliente", "fuego", "fiesta", "cerveza", "caramba",
    "bonito", "querer"];
var guesses = [];
var wordInPlay = new Word(words[Math.floor(Math.random() * words.length + 1)]);
var numGuesses = 10;
var guessString = "";
//testing
//console.log(wordInPlay);    

//Intro to the game--do you want to play?
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!"
);


// FUNCTIONS
// =========================================================================
// display the word in play as '_'
wordInPlay.showLetters();
// If user enters that they do not want to play we close game
rl.on("line", (input) => {
    if (input == "no") {
        rl.close();
    // Otherwise we start game and set variables to a new game
    } else if (input == "yes") {
        wordInPlay = new Word(words[Math.floor(Math.random() * words.length + 1)]);
        chances = 10;
        guessString = "";
        guesses = [];
    }
    
})

// How we start the game


// MAIN PROCESS 
// =========================================================================