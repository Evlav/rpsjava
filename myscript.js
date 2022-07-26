function getComputerChoice(){
    var output;
    var rng = Math.floor(Math.random() * 3);
    if (rng <= 1){
        output = "rock";
    }
    else if (rng <= 2 && rng > 1){
        output = "paper";
    }
    else if ( rng > 2){
        output = "scissor";
    }
    window.alert(output);
    console.log(output);
}

getComputerChoice();