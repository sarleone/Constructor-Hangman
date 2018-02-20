// Letter.js: Contains a constructor, Letter. This constructor should be able to either display
// an underlying character or a blank placeholder (such as an underscore), depending on whether 
// or not the user has guessed the letter. That means the constructor should define:

function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed)
        {
        	return this.char;
        }
        return "_"; 
    }
    this.isMatch = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
        }
    }
};

module.exports = Letter;

//to test
// var A = new Letter("A");
// console.log(A+" ");
// console.log(A);
