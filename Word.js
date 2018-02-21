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

//first I need to access my Letter file and constructor
var Letter = require('./Letter.js');
//testing testing 123
//console.log(Letter);

input = "apple";

//Word constructor
function Word(input) {
    //creating an array that is going to hold all the letters in the word
    var letArr = [];
    //whatever gets inputed as a word, take that and push each individ letter into the letArr
    for (var letter in input) {
        
        letArr.push(new Letter(input[letter].toUpperCase()));
    }
    //console.log(letArr);
    //save the letArr into a constructor variable
    this.word = letArr;
    //console.log(this.word);
    //save the number of guesses made correctly
    this.numbersCorrect = 0;
    //console.log(this.word);
    //returns a string representing the input word
    this.showLetters = function(){
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
    this.checkGuessed = function(char) {
        var correct = false;
        for (var i = 0; this.word.length; i++) {
            if(this.word[i] === char) {
                correct = true;
                this.numbersCorrect++;
            } else {
                break;
            }
            console.log(this.numbersCorrect);
            console.log(correct);
        }
        return correct;
    }

};

//Testing testing 123
var word = new Word(input);
word.showLetters();
word.checkGuessed("A");
word.showLetters();
//console.log(word.checkGuessed("A"));
//word.guessed("a");
// if (A.isMatch("A")
// console.log(A+" ");