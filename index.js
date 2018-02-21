var Word = require('./Word.js');
var prompt = require("prompt");

//Randomly selects a word and uses Word constructor to store it
var words = ["hola", "gustar", "caliente", "fuego", "fiesta", "cerveza", "caramba",
"bonito", "querer"];

//Prompts the user to guess and keeps track of the user's remaining guesses

prompt.start();
console.log("Welcome to the hangman game you can play in terminal!" +
"\nA random word in Spanish will be selected" +
"\nThe number of letters in the word will be represented as '_'" +
"\nYou only have 10 guesses to get it right so chose wisely!" + 
"\nReady to get started? (Y/N)");


wordInPlay = words[Math.floor(Math.random()* words.length)];
