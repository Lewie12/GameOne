let score = 0;
let timeLeft = 10;
let isGameRunning = false;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

clickButton.addEventListener('click', () => {
  if (isGameRunning) {
    score++;
    scoreDisplay.textContent = 'Score: ' + score;
  }
});

function startGame() {
  isGameRunning = true;
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = 'Score: ' + score;
  timeDisplay.textContent = 'Time Left: ' + timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = 'Time Left: ' + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      isGameRunning = false;
      alert('Time is up! Your score is ' + score);
    }
  }, 1000);
}

startGame();
