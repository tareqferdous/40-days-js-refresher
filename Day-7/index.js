const Game = () => {
  const userInput = prompt(
    "Please enter your choice: Rock, Paper or Scissor"
  ).toLowerCase();

  const computerInput = Math.floor(Math.random() * 3) + 1;

  let computerChoice = "";
  if (computerInput === 1) {
    computerChoice = "rock";
  } else if (computerInput === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  if (
    (userInput === "rock" && computerChoice === "scissor") ||
    (userInput === "paper" && computerChoice === "rock") ||
    (userInput === "scissor" && computerChoice === "paper")
  ) {
    console.log("Congratulations! You Won...");
  } else if (userInput === computerChoice) {
    console.log("Game Tie");
  } else if (
    (userInput === "paper" && computerChoice === "scissor") ||
    (userInput === "scissor" && computerChoice === "rock") ||
    (userInput === "rock" && computerChoice === "paper")
  ) {
    console.log("Computer Won!");
  }

  const playAgainPrompt = prompt("Do you want to play again? yes/no");
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";

  if (playAgain === "yes") {
    Game();
  } else {
    console.log("Thanks for the Game");
  }
};

Game();
