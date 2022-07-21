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

function playRound(playerSelection, computerSelection) {

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    // Create variable to store result message
    let result;

    // Determine and announce result based on player and computer selections
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = 'Tie!'
                return result;
            }
            else if (computerSelection === 'paper') {
                result = 'You lose! Paper beats rock.'
                return result;
            }
            else result = 'You win! Rock beats scissors'
            return result;

        case 'paper':
            if (computerSelection === 'paper') {
                result = 'Tie!'
                return result;
            }
            else if (computerSelection === 'scissors') {
                result = 'You lose! Scissors beats paper.'
                return result;
            }
            else result = 'You win! Paper beats rock.'
            return result;

        case 'scissors':
            if (computerSelection === 'scissors') {
                result = 'Tie!'
                return result;
            }
            else if (computerSelection === 'rock') {
                result = 'You lose! Rock beats scissors.'
                return result;
            }
            else result = 'You win! Scissors beats paper'
            return result;
    }
}

function game() {

    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
        
        if (result.includes('win')) {
            player++;
        }
        else if (result.includes('lose')) {
            computer++;
        }
    }

    if (player > computer) {
        console.log(`You won! The final score was ${player}-${computer}`);
    }
    else if (computer > player) {
        console.log(`You lost! The final score was ${player}-${computer}`);
    }
    else console.log('You tied!')
}

game ();
