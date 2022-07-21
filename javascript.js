function getComputerChoice () {
   let choice = Math.floor(Math.random() * 3);
    console.log(choice);
   if (choice === 0) {
    choice = 'rock';
   }
   else if (choice === 1) {
    choice = 'paper';
   }
   else choice = 'scissors';

   return choice;
}

console.log(getComputerChoice ());