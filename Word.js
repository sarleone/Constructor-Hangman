// Word.js: Contains a constructor, Word that depends on the 
// Letter constructor. This is used to create an object 
// representing the current word the user is attempting to guess. 
// That means the constructor should define:

// An array of new Letter objects representing the letters of the 
// underlying word
// A function that returns a string representing the word. 
// This should call the function on each letter object (the first 
// function defined in Letter.js) that displays the character or 
// an underscore and concatenate those together.

// GLOBAL VARIABLES 
// =========================================================================
// set variable that requires function from Letter.js
var Letter = require('./Letter.js');
// testing=========================
// console.log(Letter);
// testing=========================
// input = "apple";

// FUNCTION
// =========================================================================

// Word Constructor 
function Word(input) {
    // empty array to store and array with "Letter" qualities
    var letArr = [];
    // add "Letter" qualities
    for (i=0; i < input.length; i++) { 
        letArr.push(new Letter(input[i].toLowerCase()));
    }
    // set 'word' to the array you created
    this.word = letArr;
    // set the game to 0 guesses so far...
    this.numbersCorrect = 0;
    // testing=========================
    // console.log(this.word);
    // this will display '_' for letters of the chosen word at the start of the game
    this.showLetters = function(){
        // creating an empty string where we will store our '_'
        var wordString = "";
       
        for(var i = 0; i<this.word.length; i++)
        {
                wordString += this.word[i] + " ";
        }
        console.log(wordString);
    }
    // A function that takes a character as an argument and calls the 
    // guess function on each letter object (the second function 
    // defined in Letter.js)
    this.guessed = function(char) {
        var correct = false;
        for (var i = 0; i < this.word.length; i++) {
            if(this.word[i].isMatch(char)) {
                correct = true;
                this.numbersCorrect++;
            }
            console.log(this.numbersCorrect);
            console.log(correct);
        }
        return correct;
    }

}

// testing=========================
// var word = new Word(input);
// word.showLetters();
// word.guessed("z");
// if (A.isMatch("A")
// console.log(A + " ");
module.exports = Word;