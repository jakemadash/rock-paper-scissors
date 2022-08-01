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
 
 function getPlayerChoice() {

    let choice = '';
    const selections = document.querySelectorAll('button');
    selections.forEach(selection => selection.addEventListener('click', function() {
        choice = selection.textContent;
    }));
    return choice;
 }
 
 function playRound(playerSelection) {
 
     // Generate new choices
     let computerSelection = getComputerChoice();
 
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
     console.log(result);
 }
 
 function game() {
 
     // Set scores to 0
     let player = 0;
     let computer = 0;
     const result = document.getElementById('result');
     const score = document.getElementById('score');
     let playerSelection;
 
     // Play 5 rounds and keep score
     for (let i = 0; i < 5; i+= player + computer) {
         const selections = document.querySelectorAll('button');
         selections.forEach(selection => selection.addEventListener('click', function() {
            playerSelection = selection.textContent;
            result.textContent = playRound(playerSelection);
            
            if (result.textContent.includes('win')) {
                player++;
            }
            else if (result.textContent.includes('lose')) {
                computer++;
            }

            console.log(result.textContent);
            score.textContent = player + "-" + computer;
            i = player + computer;
        }));
    }
         // Print results
     if (player > computer) {
        result.textContent = `You won! Refresh to play again.`;
     }
     else if (computer > player) {
        result.textContent = `You lost! Refresh to play again.`;
     }
}
 game ();