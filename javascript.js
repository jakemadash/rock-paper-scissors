function getComputerChoice() {

   // Generate random number 0-2 
   let choice = Math.floor(Math.random() * 3);

   // Convert number to game choice
   if (choice === 0) {
    choice = 'rock';
   }
   else if (choice === 1) {
    choice = 'paper';
   }
   else choice = 'scissors';

   return choice;
}

let player = 0;
let computer = 0;

// Make buttons play round against CPU
const selections = document.querySelectorAll('button');
selections.forEach(selection => selection.addEventListener('click', function() {
    const result = document.getElementById('result');
    result.textContent = playRound(selection.textContent);
    if (player === 5) {
        result.textContent = `You won! Refresh to play again.`;
    }
    else if (computer === 5) {
        result.textContent = `You lost! Refresh to play again.`;
    }
    else if (result.textContent.includes('win')) {
        player++;
    }
    else if (result.textContent.includes('lose')) {
        computer++;
    }
    const score = document.getElementById('score');
    score.textContent = player + "-" + computer;
}));

function game(playerSelection) {

    // Set scores to 0
    let player = 0;
    let computer = 0;

    // Play 5 rounds and keep score
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection);
        console.log(result);
        
        if (result.includes('win')) {
            player++;
        }
        else if (result.includes('lose')) {
            computer++;
        }
    }

    // Print results
    if (player > computer) {
        console.log('\n', `You won! The final score was ${player}-${computer}`);
    }
    else if (computer > player) {
        console.log('\n', `You lost! The final score was ${player}-${computer}`);
    }
    else console.log('\n', `You tied with the computer!`);
}

function playRound(playerSelection) {

    // Generate computer choice
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

