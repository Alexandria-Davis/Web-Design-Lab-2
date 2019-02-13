
var RandNumber = RandNumber = Math.floor(Math.random()*99)+1;
var guesscount = 1;
var maxguesses=7;

//HTML Shortcuts
var guessField = document.querySelector("#guessField");
var guessSubmit = document.querySelector(".guessSubmit");
guessSubmit.addEventListener('click', checkGuess);

var reset = document.querySelector("#reset") //if guessSubmit is a class, reset will be one too.
reset.style.display="none";

var guesses = document.querySelector("#guesses");
var lastResult = document.querySelector("#lastResult")
var LowOrHigh = document.querySelector("#lowOrHigh")

document.getElementById("Numb_To_Guess").innerHTML = RandNumber;
console.log(RandNumber);

function checkGuess() {
  var guess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.innerHTML = "Previous Guesses: "
  }
  guesses.innerHTML += guess + " "
  if (!(guess && guess > 0 && guess < 100))
  {
    lastResult = "Error: not a valid guess";
    lastResult.style.backgroundColor = "yellow";
    guessCount--;
  }
  else if (guess = RandNumber) {
    lastResult.innerHTML = "Congradulations! You got it right!"
    lastResult.style.backgroundColor = "green";
    lowOrHigh.innerHTML = " -- "
    setGameOver();
  }
  else if (guessCount === maxguesses) {
    lastResult.innerHTML = "Sory, you've lost";
    setGameOver();
  }
  else {
    lastResult.innerHTML = "Wrong";
    lastResult.style.backgroundColor = "red";
    if (guess < RandNumber) {
      lowOrHigh.innerHTML = "Last guess was too low";
    }
    else { //let's be honest here, the if after this else statement is unessasary. If all conditions are met, then a number that is not equal and is not less than is going to be more than.
      lowOrHigh.innerHTML = "Last guess was too high";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  reset.style.display = "inline";
  reset.addEventListener("click",resetGame);
}
function resetGame() {
  var RandNumber = RandNumber = Math.floor(Math.random()*99)+1;
  var guesscount = 1;
  reset.style.display="none";
  lowOrHigh.innerHTML='';
  lastResult.style.backgroundColor="white";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent="";
  }
}
