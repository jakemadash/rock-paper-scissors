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
    
    // Check for valid selection and reprompt
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('Please enter valid choice');
        choice = choice.toLowerCase();
}
    return choice;
}



const selections = document.querySelectorAll('button');
selections.forEach(selection => selection.addEventListener('click', function() {
    console.log(playRound(selection.textContent));
}));


function playRound(playerSelection) {

    // Generate new choices
    computerSelection = getComputerChoice();
    // Create variable to store result message
    let result;

    // Determine and announce result
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

