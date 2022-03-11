function computerPlay () {
    const number = (Math.random() * 3);
    if (number<= 1){
        return "Rock";
    } else if (number >= 2){
        return "Scissors";
    }
    else return "Paper";
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
if (playerSelection === "rock" && computerSelection === "Scissors"){
    playerScore++;
    return `You win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === "scissors" && computerSelection === "Paper"){
    playerScore++;
    return `You win! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === "paper" && computerSelection === "Rock"){
    playerScore++;
    return `You win! Paper beats Rock. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === "rock" && computerSelection === "Paper"){
    computerScore++;
    return `You lose! Paper beats Rock. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === "scissors" && computerSelection === "Rock"){
    computerScore++;
    return `You lose! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === "paper" && computerSelection === "Scissors"){
    computerScore++;
    return `You lose! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`;
} else if (playerSelection === computerSelection){
    return `Draw! Score: ${playerScore} to ${computerScore}`;
} else {
    return `Invalid input`;
}
}

function game(){
for (let i = 0; i<5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
}
if (playerScore > computerScore){
    console.log(`You are the winner! Final score: ${playerScore} to ${computerScore}`);
} else if (computerScore > playerScore){
    console.log(`Computer is the winner! Final score: ${playerScore} to ${computerScore}`);
}else 
    console.log(`You tied! Final score: ${playerScore} to ${computerScore}`);
}
game();








