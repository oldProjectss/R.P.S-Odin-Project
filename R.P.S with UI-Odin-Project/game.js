function computerPlay() {
  // the function need to return randomly "ROCK", "PAPER", or "SCISSORS"
  const options = ["ROCK", "PAPER", "SCISSORS"];
  let option = options[Math.floor(Math.random() * 2)];
  // This function will be used as computer play
  return option;
}

let playerPoint = 0;
let computerPoint = 0;
let round = "";

function playRound(playerPlay) {
  // get data
  let computer = computerPlay();
  let player = playerPlay;

  // add three chose
  // computer = computer.toUpperCase();
  // player = player.toUpperCase();
  // compare computer vs player
  if (computer === "ROCK") {
    if (player === "ROCK") {
      round = `${computer} vs ${player}`;
    } else if (player === "SCISSORS") {
      round = `${computer} beats ${player}`;
      computerPoint++;
    } else if (player === "PAPER") {
      round = `${player} beats ${computer}`;
      playerPoint++;
    } else {
      round = `Please enter a valid value!`;
    }
  } else if (computer === "PAPER") {
    if (player === "ROCK") {
      round = `${computer} beats ${player}`;
      computerPoint++;
    } else if (player === "SCISSORS") {
      round = `${player} beats ${computer}`;
      playerPoint++;
    } else if (player === "PAPER") {
      round = `${computer} vs ${player}`;
    } else {
      round = `Please enter a valid value!`;
    }
  } else if (computer === "SCISSORS") {
    if (player === "ROCK") {
      round = `${player} beats ${computer}`;
      playerPoint++;
    } else if (player === "SCISSORS") {
      round = `${computer} vs ${player}`;
    } else if (player === "PAPER") {
      round = `${computer} beats ${player}`;
      computerPoint++;
    } else {
      round = `Please enter a valid value!`;
    }
  }

  Ui();
  if (playerPoint === 5 || computerPoint === 5) {
    playerPoint = 0;
    computerPoint = 0;
  }
}
