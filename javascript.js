function getComputerChoice {
   let choice = Math.random(math.floor() * 3);

   if (choice === 0) {
    choice = 'rock';
   }
   else if (choice === 1) {
    choice = 'paper';
   }
   else choice = 'scissors';

   return choice;
}