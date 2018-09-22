{/* <script type="text/javascript"> */}

//  letters to be used
var eyeChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// zeroing
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];

//  random choice from the eyeChoices array.
var eyeGuess = eyeChoices[Math.floor(Math.random() * eyeChoices.length)];
console.log(eyeGuess);

function countGuessesLeft() {
    // document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    console.log(guessesLeft);

var elGuessesLeft = document.getElementById('guessesLefttable');
elGuessesLeft.textContent = guessesLeft        
}

function farUserGuesses() {
// document.querySelector("#letter").innerHTML = "Your Guesses...: " + letterUser.join('');

 //get the element thas has an id of lettertable
 var el = document.getElementById('lettertable')
// replace the content of that element with the new value
el.textContent = letterUser;   


}

countGuessesLeft();

var restart = function() {
guessesLeft = 9;
letterUser = [];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
guessesLeft--;

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

letterUser.push(userGuess);
countGuessesLeft();
farUserGuesses();

if (userGuess === eyeGuess){
wins++;
// document.querySelector("#wins").innerHTML = "Wins: " + wins;
    
    var elwinstable = document.getElementById('winstable');
    elwinstable.textContent = wins;
    
    restart();
    

} 
else if (guessesLeft === 0) {
losses++;
    // document.querySelector("#lose").innerHTML = "Loses: " + losses;
    
    var ellosetable = document.getElementById('losetable');
    ellosetable.textContent = losses;        
    
    restart();
}
};        






{/* </script> */}
    