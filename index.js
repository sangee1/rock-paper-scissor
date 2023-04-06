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
    let compCounter = 0;
    /* for (let i = 0; i < 5; i++) {
        // Play the game five times and declare winner based on a counter
        const playerSelection = prompt("Enter Rock,Paper or Scissor :")
        const computerSelection = getComputerChoice();
        let win = playRound(playerSelection, computerSelection);
        if (win) {
            counter += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            console.log(`You lose ! ${computerSelection} beats ${playerSelection}`);
        }
    }
    console.log(`You won ${counter} times.`) */
    //For each button add an Event listener that calls playRound with the correct selection
    const buttons = document.querySelectorAll("button");
    console.log(buttons);
    buttons.forEach(btn=> btn.addEventListener("click", function(e){
        console.log(e.target.id);
        const computerSelection = getComputerChoice();
        const playerSelection =e.target.id
        let win = playRound(playerSelection,computerSelection);

        //Create Results
        const results = document.querySelector("#results");
        const para = document.createElement("p")
        const para2=document.createElement("p")
        if(win){
            counter += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            
            para.textContent = `You win! ${playerSelection} beats ${computerSelection}`
            
        }
        else{
            compCounter += 1
           para.textContent = `You lose ! ${computerSelection} beats ${playerSelection}`;
        }
        para2.textContent=`You've won ${counter} games!`
        results.innerHTML=""
        if(counter == 5 ){
            //Announce winner of the game
            para.textContent=`You win with ${counter} games!`
            results.appendChild(para)
            return;

        }else if (compCounter == 5){
            para.textContent=`The computer wins with ${compCounter} games!`
            results.appendChild(para)
            return;
        }
        results.appendChild(para)
        results.appendChild(para2)

    }))
}
//const playerSelection="rock"
game()