/* Game Function:
- Player must guess a number btw a min and max
- Player gets a certain amt of guesses
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Play again event listener
game.addEventListener("mousedown", function(e) {
  console.log(1);
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    //Disable input
    gameOver(true, "You won!");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over
      gameOver(false, `You lost! Correct number is ${winningNum}`);
    } else {
      //Game continues
      guessInput.style.borderColor = "red";

      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "Red");
    }
  }
});

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);
  //Play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//random num gen
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
