const randomNumber = Math.random() * 20;
let luckyNumber = Math.floor(randomNumber);

console.log(luckyNumber);

var score = 20;
const guessInputField = document.getElementById("guess-number");
const checkButton = document.getElementById("check-btn");
const againButton = document.getElementById("again-btn");
const message = document.getElementById("message");
const colors = document.getElementById("body");
const scoreSpan = document.getElementById("score");

function check() {
  const number = guessInputField.value;

  if (number == luckyNumber) {
    message.textContent = "you guessed right";
    colors.style.backgroundColor = "green";
    message.style.color = "red";
  } else {
    if (score == 0) {
      alert("You have lost the game!");
      const randomNumber = Math.random() * 20;
      luckyNumber = Math.floor(randomNumber);
      score = 21;
      scoreSpan.textContent = 20;
    }
    score = score - 1;
    scoreSpan.textContent = "score:  " git+ score;

    if (number > luckyNumber) {
      message.textContent = "Your guess is too high!👆";
      colors.style.backgroundColor = "red";
      message.style.color = "green";
    } else {
      message.textContent = "Your guess is too low!👇";
      colors.style.backgroundColor = "red";
      message.style.color = "green";
    }
  }
}
function playAgain() {
  const randomNumber = Math.random() * 20;
  luckyNumber = Math.floor(randomNumber);
  console.log(luckyNumber);
  score = 20;
  scoreSpan.textContent = 20;
  colors.style.backgroundColor = "rgb(20, 20, 20, 0.9)";
}
checkButton.addEventListener("click", check);
againButton.addEventListener("click", playAgain);
