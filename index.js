function getComputerChoice(){
    //return at random Rock or Paper or Scissor
    const options = ["Rock","Paper","Scissor"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(playerSelection,computerSelection){
    //return whether player wins or loses
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    let win=false;
    console.log(`Player Choice : ${playerChoice}`);
    console.log(`Computer Choice : ${computerChoice}`);
    if ((playerChoice === "rock" && computerChoice === "scissor") ||
          (playerChoice === "scissor" && computerChoice === "paper") ||
          (playerChoice === "paper" && computerChoice === "rock")){
        win = true;
    }
    return win;
}


function game(){
    let counter = 0;
    for(let i=0;i<5;i++){
        // Play the game five times and declare winner based on a counter
        const playerSelection = prompt("Enter Rock,Paper or Scissor :")
        const computerSelection = getComputerChoice();
        let win = playRound(playerSelection,computerSelection);
        if(win){
            counter += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }else{
            console.log(`You lose ! ${computerSelection} beats ${playerSelection}`);
        }
    }
    console.log(`You won ${counter} times.`)
}
//const playerSelection="rock"
game()