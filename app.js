/* Game Function:
- Player must guess a number btw a min and max
- Player gets a certain amt of guesses
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI Elements
const game = document.getElementById("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

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
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = "green";
    //set message
    setMessage(
      "CONGRATULATIONS. Worked so hard, forgot how to vacation. They ain't never had the dedication. People hatin', say we changed and look we made it. Yeah, we made it",
      "green"
    );
  } else {
  }
});

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
