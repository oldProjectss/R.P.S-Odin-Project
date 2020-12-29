function computerPlay() {
    // the function need to return randomly "ROCK", "PAPER", or "SCISSORS"
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let option = options[Math.floor(Math.random() * 2)];
    // This function will be used as computer play
    return option;
}

function playRound() {
    // get data
    let computer = computerPlay();
    let player = prompt("Select one option: Rock, Paper, Scissors");
    // add three chose
    computer = computer.toUpperCase();
    player = player.toUpperCase();
    // compare computer vs player
    if (computer === "ROCK") {
        if (player === "ROCK") {
            return `Tie!`;
        } else if (player === "SCISSORS") {
            return `You Lose! ${computer} beats ${player}`;
        } else if (player === "PAPER") {
            return `You win! ${player} beats ${computer}`;
        } else {
            return `Please enter a valid value!`;
        }
    } else if (computer === "PAPER") {
        if (player === "ROCK") {
            return `You Lose! ${computer} beats ${player}`;
        } else if (player === "SCISSORS") {
            return `You win! ${player} beats ${computer}`;
        } else if (player === "PAPER") {
            return `Tie!`;
        } else {
            return `Please enter a valid value!`;
        }
    } else if (computer === "SCISSORS") {
        if (player === "ROCK") {
            return `You win! ${player} beats ${computer}`;
        } else if (player === "SCISSORS") {
            return `Tie!`;
        } else if (player === "PAPER") {
            return `You Lose! ${computer} beats ${player}`;
        } else {
            return `Please enter a valid value!`;
        }
    }
}

function game() {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound();
        if (round.includes("win!")) {
            player++;
        } else if (round.includes("Lose!")) {
            computer++;
        }
        console.log(`Player has ${player} point.\nComputer has ${computer} point.`);
    }
    if (player > computer) {
        console.log(`You win by ${player} points!`);
    } else if (player < computer) {
        console.log(`You lost!`);
    } else {
        console.log(`it's a Tie! play again.`);
    }
}

game();