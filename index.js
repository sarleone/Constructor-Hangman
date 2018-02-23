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
var word = new Word(wordInPlay);
var numGuesses = 10;
//testing
console.log(wordInPlay);    

//Intro to the game--do you want to play?
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!"
);


// FUNCTIONS
// =========================================================================
console.log(word.showLetters());


// How we start the game


// MAIN PROCESS 
// =========================================================================