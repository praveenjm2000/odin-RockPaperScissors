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
    else if(playerSelection.toLowerCase()!="scissor"&&playerSelection.toLowerCase()!="rock"&&playerSelection.toLowerCase()!="paper"){
        return("Enter appropriate value!!!");
    }
    else if ((playerSelection.toLowerCase()==="scissor" && computerSelection==="rock") || (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") || (playerSelection.toLowerCase()==="paper"&&computerSelection==="scissor")) {
        cPoint+=1;
        return("You lose! "+computerSelection+" beats "+playerSelection);
    }
    else{
        pPoint+=1;
        return("You won! "+playerSelection+" beats "+computerSelection);
    }
}
/*
function gameCall() {
    while(count){
        console.log(count);
        gamelisten();
    }
}*/

let count=5;
let cPoint;
let pPoint;

const startBtn = document.querySelector('.btn');
startBtn.addEventListener('click',() => {
    cPoint=0;
    pPoint=0;
    startBtn.textContent = "Start Over";
    updateScore();
    gamelisten();
});

/*
if(point>0){
    alert("You won!!!");
}
else if(point<0){
    alert("You lose :(")
}
else{
   alert("Game tied.")
}
*/

function gamelisten(){
    if(pPoint>=5||cPoint>=5){
        return;
    }
    console.log('start');
    const ops = document.querySelectorAll('.option');
    ops.forEach(opr => opr.addEventListener('click', test));
}
function test(e){
    const name = e.target.className;
    console.log(name);
    alert(game(name));
    console.log(pPoint, cPoint);
    updateScore();
}

function updateScore() {
    const pS = document.querySelector('.pscore');
    const cS = document.querySelector('.cscore');
    pS.textContent = pPoint;
    cS.textContent = cPoint;
}