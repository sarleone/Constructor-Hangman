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
    "bonito", "querer", "comida", "comer", "familia", "biblioteca", "universidad", 
    "gato", "perro", "pajaro", "poder", "buenas", "mano", "casa", "carro", "matematicas"
];
var guesses = [];
var wordInPlay = words[Math.floor(Math.random() * words.length + 1)];
var word = new Word(wordInPlay);
var numGuesses = 10;
var guessString = "";
// testing======================================
// console.log(wordInPlay);    

// START GAME
// =========================================================================
// Intro to the game--do you want to play?
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!"
);

// display the word in play as '_'
word.showLetters();
// If user enters that they do not want to play we close game
rl.on("line", (input) => {
    if (input == "no") {
        rl.close();
    // Otherwise we start game and set variables to a new game
    } else if (input == "yes") {
        wordInPlay = words[Math.floor(Math.random() * words.length + 1)];
        word = new Word(wordInPlay)
        numGuesses = 10;
        guessString = "";
        guesses = [];
    // if the guess is not already found in the guesses array
    } else if (guesses.indexOf(input) == -1) {
        // add their choice to the guesses array
        guesses.push(input);
        // add these guesses to guessString
        guessString += input + " ";
        // if the entry is not found in the word
        if (word.guessed(input) == false) {
            console.log ("Try again!");
            // reduce number of numGuesses to guess
            numGuesses--;
            console.log("You got this! You have " + numGuesses + " left!");
        }
    // if the guess is already found in the guesses array    
    } else if (guesses.indexOf(input) != -1) {
        console.log("You already tried guessing this letter!");
    // if you guessed every letter in the word
    } if (word.numbersCorrect == word.word.length) {
        // show the word
        word.showLetters();
        console.log("Congrats on the Hangman win. You get mad clout. Would you like to play again? Enter 'yes' or 'no'.");
    // if you don't guess the word in 10 numGuesses
    } else if (numGuesses == 0) {
        console.log("GAME OVER! The word was " + wordInPlay +"." +
        "\nWould you like to play again? Enter yes or no.");
    // if there are still some numGuesses left show the guesses already made and update the 'wordInPlay'
    } else {
        // show the letters guessed after each entry and display the updated 'wordInPlay'
        console.log("Letters guessed: " + guessString);
        word.showLetters();
    }  

// Party pooper? No game for you. Boy bye.     
}).on("close", () => {
    console.log("See ya next time!");
    process.exit(0);
});
