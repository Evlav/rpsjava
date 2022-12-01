function getComputerChoice(){
    let output;
    let rng = Math.floor(Math.random() * 3);
    if (rng < 1){
        output = "rock";
    }
    else if (rng < 2 && rng >= 1){
        output = "paper";
    }
    else if (rng => 2){
        output = "scissor";
    }
    
    console.log(rng);
    return(output)
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
if (playerSelection == "rock" && computerSelection == "rock"){
    return "Draw!";
}
else if (playerSelection == "rock" && computerSelection == "scissor"){
    playerwins += 1;
    return "You Win!";
}
else if (playerSelection == "rock" && computerSelection == "paper"){
    cpuwins += 1;
    return "You Lose!";
}
else if (playerSelection == "scissor" && computerSelection == "scissor"){
    return "Draw!";
}
else if (playerSelection == "scissor" && computerSelection == "rock"){
    cpuwins += 1;
    return "You Lose!";
}
else if (playerSelection == "scissor" && computerSelection == "paper"){
    playerwins += 1;
    return "You Win!";
}
else if (playerSelection == "paper" && computerSelection == "paper"){
    return "Draw!";
}
else if (playerSelection == "paper" && computerSelection == "scissor"){
    cpuwins += 1;
    return "You Lose!";
}
else if (playerSelection == "paper" && computerSelection == "rock"){
    playerwins += 1;
    return "You Win!";
}
}

function displayresults(playerSelection){
    let computerSelection = getComputerChoice();
    results.textContent = playRound(playerSelection, computerSelection);
    tally.textContent = "You " + playerwins + " - " + cpuwins + " CPU";
    container.appendChild(results);
    container.appendChild(tally);
}

//main
let computerSelection;
let playerSelection;
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    playerSelection = 'rock';
    displayresults(playerSelection);
    
});
btn2.addEventListener('click', () => {
    playerSelection = 'paper';
    displayresults(playerSelection);
});
btn3.addEventListener('click', () => {
    playerSelection = 'scissor';
    displayresults(playerSelection);
});




//create display

const container = document.querySelector('#container');
const results = document.createElement('div');
const tally = document.createElement('div');
let playerwins = 0;
let cpuwins = 0;



//console.log(playRound(playerSelection, computerSelection));
// for (let i = 0; i < 5; i++){
    
// }
