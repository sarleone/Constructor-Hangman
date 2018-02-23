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

var Letter = require('./Letter.js');
//testing
//console.log(Letter);
//testing
//input = "apple";

function Word(input) {
    var letArr = [];
    for (i=0; i < input.length; i++) {
        
        letArr.push(new Letter(input[i].toUpperCase()));
    }
    this.word = letArr;
    this.numbersCorrect = 0;
    console.log(this.word);
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
    this.guessed = function(char) {
        var correct = false;
        for (var i = 0; this.letArr.length; i++) {
            if(letArr[i].isMatch(char)) {
                correct = true;
                this.numbersCorrect++;
            }
            console.log(this.numbersCorrect);
            console.log(correct);
        }
        return correct;
    }

}

//var word = new Word(input);
//word.showLetters();
//word.guessed("a");
// if (A.isMatch("A")
// console.log(A+" ");
module.exports = Word;