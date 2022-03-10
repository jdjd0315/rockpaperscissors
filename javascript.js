function computerPlay () {
    const number = (Math.random() * 3);
    if (number<= 1){
        return "Rock";
    } else if (number >= 2){
        return "Scissors";
    }
    else return "Paper";
}

const playerSelection = prompt("Rock, Paper, or Scissors?");

function playRound(playerSelection, computerSelection) {
if (playerSelection === "Rock" && computerSelection === "Scissors"){
    return "You win! Rock beats Scissors.";
} else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You win! Scissors beats Paper.";
} else if (playerSelection === "Paper" && computerSelection === "Rock"){
    return "You win! Paper beats Rock.";
} else if (playerSelection === "Rock" && computerSelection === "Paper"){
    return "You lose! Paper beats Rock.";
} else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    return "You lose! Rock beats Scissors.";
} else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    return "You lose! Scissors beats Paper.";
} else if (playerSelection === computerSelection){
    return "Draw!";
} else {
    return "Invalid input";
}
}

const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log (playRound(playerSelection, computerSelection));





