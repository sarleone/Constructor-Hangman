// Letter.js: Contains a constructor, Letter. This constructor should be able
// to either display an underlying character or a blank placeholder (such as 
// an underscore), depending on whether or not the user has guessed the letter. 


// CONSTRUCTOR FUNCTION
// =========================================================================
function Letter(char) {
    // A string value to store the underlying character for the letter
    this.char = char;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns the either the word guessed or '_'
    this.toString = function() {
        if (this.guessed)
        {
        	return this.char;
        }
        return "_"; 
    }
    // A function that takes letter and updates boolean value to true if guessed correctly
    this.isMatch = function(letter) {
        if (this.char === letter) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}
// Export this fuction for Word.js
module.exports = Letter;

//to test
// var A = new Letter("A");
// console.log(A+" ");
// console.log(A);
