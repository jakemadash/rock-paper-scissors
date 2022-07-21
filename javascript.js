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

    while (choice.toLowerCase() !== 'rock' | 'paper' | 'scissors') {
        let choice = prompt('Please enter valid choice');
}
}

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt('Enter your choice');
    let computerSelection = getComputerChoice ();
}