let playerChoice, computerChoice;
let playGame = true;
winningScore = 10;

// getting a random choice for computer
const getComputerChoice = function () {
  choices = ["rock", "paper", "scissor"];
  let i = Math.floor(Math.random() * 3) + 1;
  computerChoice = choices[i - 1];
};

//getting players choice
let display = true;
const allButtons = document.querySelectorAll(".btn");
allButtons.forEach((item) => {
  item.addEventListener("click", function () {
    if (playGame === true) {
      playerChoice = item.id;
      displayChoice(display);
      getScore(playerChoice, computerChoice);
      winner(scorePlayer, scoreComputer);
    }
  });
});

//displaying the player and computer choice in their respective cards
const playerSide = document.querySelector(".player-side");
const computerSide = document.querySelector(".computer-side");
const playerImg = document.createElement("img");
const computerImg = document.createElement("img");
const displayChoice = function (display) {
  if (display) {
    getComputerChoice();
    playerImg.src = `./images/${playerChoice}.png`;
    computerImg.src = `./images/${computerChoice}.png`;
    playerSide.appendChild(playerImg);
    computerSide.appendChild(computerImg);
    display = false;
  } else {
    playerImg.src = `./images/${playerChoice}.png`;
    computerImg.src = `./images/${computerChoice}.png`;
  }
};

// getting scores
let scorePlayer = 0;
let scoreComputer = 0;
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const getScore = function (playerChoice, computerChoice) {
  if (playerChoice !== computerChoice) {
    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper") ||
      (playerChoice === "rock" && computerChoice === "scissor")
    ) {
      scorePlayer += 1;
      playerScore.textContent = scorePlayer;
    } else {
      scoreComputer += 1;
      computerScore.textContent = scoreComputer;
    }
  }
};

// function to declare who wins the game
const winnerDiv = document.querySelector(".winner-section");
const winnerName = document.querySelector(".winner-name");
const winner = function (scorePlayer, scoreComputer) {
  if (scorePlayer === winningScore) {
    playGame = false;
    winnerDiv.classList.remove("hidden");
    winnerName.textContent = "Player wins!";
  } else if (scoreComputer === winningScore) {
    playGame = false;
    winnerDiv.classList.remove("hidden");
    winnerName.textContent = "Computer wins!";
  }
};

//restarting the game
const restart = document.querySelector(".restart");
restart.addEventListener("click", function () {
  playGame = true;
  winnerDiv.classList.add("hidden");
  playerSide.removeChild(playerImg);
  computerSide.removeChild(computerImg);
  scoreComputer = 0;
  scorePlayer = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
});
