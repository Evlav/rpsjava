function getComputerChoice(){
    let output;
    let rng = Math.floor(Math.random() * 3);
    if (rng <= 1){
        output = "rock";
    }
    else if (rng <= 2 && rng > 1){
        output = "paper";
    }
    else if ( rng > 2){
        output = "scissor";
    }
    
    console.log(output);
    return(output)
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
if (playerSelection == "rock" && computerSelection == "rock"){
    return "Draw!";
}
else if (playerSelection == "rock" && computerSelection == "scissor"){
    return "You Win!";
}
else if (playerSelection == "rock" && computerSelection == "paper"){
    return "You Lose!";
}
else if (playerSelection == "scissor" && computerSelection == "scissor"){
    return "Draw!";
}
else if (playerSelection == "scissor" && computerSelection == "rock"){
    return "You Lose!";
}
else if (playerSelection == "scissor" && computerSelection == "paper"){
    return "You Win!";
}
else if (playerSelection == "paper" && computerSelection == "paper"){
    return "Draw!";
}
else if (playerSelection == "paper" && computerSelection == "scissor"){
    return "You Lose!";
}
else if (playerSelection == "paper" && computerSelection == "rock"){
    return "You Win!";
}
}

//main
const playerSelection = "rock";
const computerSelection = getComputerChoice();

for (let i = 0; i < 5; i++){
    console.log(playRound(playerSelection, computerSelection));
}
