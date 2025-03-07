let wins = 0;
let loses = 0;
let draws = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const imageUrls = {
    rock: "img/rock-emoji.png",
    paper: "img/scroll-emoji.png",
    scissors: "img/scissors-emoji.png",
  };

  document.getElementById(
    "playerChoice"
  ).innerHTML = `<img src="${imageUrls[playerChoice]}" alt="${playerChoice}">`;
  document.getElementById(
    "computerChoice"
  ).innerHTML = `<img src="${imageUrls[computerChoice]}" alt="${computerChoice}">`;

  if (playerChoice === computerChoice) {
    draws++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    wins++;
  } else {
    loses++;
  }

  document.getElementById("wins").textContent = wins;
  document.getElementById("loses").textContent = loses;
  document.getElementById("draws").textContent = draws;
}

function resetGame() {
  wins = 0;
  loses = 0;
  draws = 0;
  document.getElementById("wins").textContent = wins;
  document.getElementById("loses").textContent = loses;
  document.getElementById("draws").textContent = draws;
  document.getElementById("playerChoice").innerHTML =
    '<img src="https://tse4.mm.bing.net/th?id=OIP.naX3trVTw20Uzw6pZ2gPJgHaHa&pid=Api&P=0&h=220" alt="Initial Choice">';
  document.getElementById("computerChoice").innerHTML =
    '<img src="https://tse4.mm.bing.net/th?id=OIP.g_9ijkvCojlrwHYQbS0jugHaHa&pid=Api&P=0&h=220" alt="Initial Computer Choice">';
}
