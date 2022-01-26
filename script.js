function computerPlay() {
    let x=Math.floor(Math.random()*10);
    x=x%3;
    if(x===0){
        return "rock";
    }
    else if(x==1) {
        return "paper";
    }
    else{
        return "scissors";
    }
}
function game(playerSelection) {
    computerSelection=computerPlay();
    console.log(computerSelection);
    if (playerSelection.toLowerCase()===computerSelection){
        return("Its a tie");
    }
    else if(playerSelection.toLowerCase()!="scissors"&&playerSelection.toLowerCase()!="rock"&&playerSelection.toLowerCase()!="paper"){
        return("Enter appropriate value!!!");
    }
    else if ((playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") || (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") || (playerSelection.toLowerCase()==="paper"&&computerSelection==="scissors")) {
        point-=1;
        return("You lose! "+computerSelection+" beats "+playerSelection);
    }
    else{
        point+=1;
        return("You won! "+playerSelection+" beats "+computerSelection);
    }
}

function gameCall() {
    while(count){
        console.log(6-count);
        console.log(game(prompt("RockPaperScissors?", 'Rock')));
        count=count-1;
    }
}

let count=5;
let point=0;
console.log("New game!!");
gameCall();
if(point>0){
    alert("You won!!!");
}
else if(point<0){
    alert("You lose :(")
}
else{
    alert("Game tied.")
}
/*
while(1){
    let input = prompt("Enter selection:",'Rock').toLowerCase();
    game(input,computerPlay());
    
    if(output===0){
        console.log("Game lost");
    }
    else if(output===1){
        console.log("Game won");
    }
    else{
        console.log("Game tie!");
    }*/
