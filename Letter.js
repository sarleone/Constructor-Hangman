// Letter.js: Contains a constructor, Letter. This constructor should be able to either display
// an underlying character or a blank placeholder (such as an underscore), depending on whether 
// or not the user has guessed the letter. That means the constructor should define:

//Letter CONSTRUCTOR!!!!!
function Letter(char) {
    //stores the underlying character in Hangman game
    this.char = char;
    //a boolean that tracks whether or not a letter has been guessed
    this.guessed = false;
    //This function either returns the underlying char or an underscore
    //With "toString" JavaScript will call that function automatically whenever casting that object to a string 
    this.toString = function() {
        if (this.guessed)
        {
    //If it was guessed, return the underlying character!
            return this.char;
        }
    //else return and underscore
        return "_"; 
    }
    //Checks if a letter has been inputed and will mark the letter as guessed or not guessed
    this.isMatch = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
        }
        return false;
    }
};

//Exports for pick up later :)
module.exports = Letter;

//to test
// var A = new Letter("A");
// console.log(A+" ");
// console.log(A);
