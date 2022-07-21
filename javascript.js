function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3);
    console.log(choice);

   if (choice === 0) {
    choice = 'Rock';
   }
   else if (choice === 1) {
    choice = 'Paper';
   }
   else choice = 'Scissors';

   return choice;
}

function getPlayerChoice() {
    let choice = prompt('Enter your choice');
    choice = choice.toLowerCase();
    console.log(choice);
    if ( choice === 'rock' | choice === 'paper' | choice === 'scissors') {
        return choice;
}
    else choice = prompt('Please enter valid choice');
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    return;
}