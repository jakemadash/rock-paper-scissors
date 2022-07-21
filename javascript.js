function getComputerChoice() {

   // Generate random number 0-2 
   let choice = Math.floor(Math.random() * 3);

   // Convert number to game choice
   if (choice === 0) {
    choice = 'Rock';
   }
   else if (choice === 1) {
    choice = 'Paper';
   }
   else choice = 'Scissors';

   return choice.toLowerCase();
}

function getPlayerChoice() {

    // Get choice and make case insensitive
    let choice = prompt('Enter your choice');
    choice = choice.toLowerCase();
    
    // Check for valid selection
    if ( choice === 'rock' | choice === 'paper' | choice === 'scissors') {
        return choice;
}
    // Reprompt if selection invalid
    else choice = prompt('Please enter valid choice');
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {

    let result;

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = 'Tie! Play again.'
                return result;
            }
            else if (computerSelection === 'paper') {
                result = 'You lose! Paper beats rock.'
                return result;
            }
            else result = 'You win! Rock beats scissors'
            return result;
    }
    return;
}
