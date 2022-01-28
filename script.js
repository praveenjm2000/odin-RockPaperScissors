function computerPlay() {
    let x=Math.floor(Math.random()*10);
    x=x%3;
    if(x===0){
        imgResult.src="https://img.icons8.com/emoji/96/000000/rock-emoji.png";
        updateImg();
        return "rock";
    }
    else if(x==1) {
        imgResult.src="https://img.icons8.com/ios/100/000000/matt-paper.png";
        updateImg();
        return "paper";
    }
    else{
        imgResult.src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/000000/external-cut-command-in-shape-of-scissor-for-computing-text-bold-tal-revivo.png";
        updateImg();
        return "scissor";
    }
}
function game(playerSelection) {
    computerSelection=computerPlay();
    console.log(computerSelection);
    if (playerSelection.toLowerCase()===computerSelection){
        removeTransition();
        return("Its a tie");
    }
    else if(playerSelection.toLowerCase()!="scissor"&&playerSelection.toLowerCase()!="rock"&&playerSelection.toLowerCase()!="paper"){
        return("Enter appropriate value!!!");
    }
    else if ((playerSelection.toLowerCase()==="scissor" && computerSelection==="rock") || (playerSelection.toLowerCase()==="rock" && computerSelection==="paper") || (playerSelection.toLowerCase()==="paper"&&computerSelection==="scissor")) {
        cPoint+=1;
        lostTransition();
        return("You lose! "+computerSelection+" beats "+playerSelection);
    }
    else{
        pPoint+=1;
        wonTransition();
        return("You won! "+playerSelection+" beats "+computerSelection);
    }
}

let count=5;
let cPoint;
let pPoint;

let imgResult = document.createElement("img");
imgResult.setAttribute('style','height:120px; width:120px;')
const block = document.querySelector('.cbox');

const startBtn = document.querySelector('.btn');
startBtn.addEventListener('click',() => {
    cPoint=0;
    pPoint=0;
    startBtn.textContent = "Restart";
    updateScore();
    removeTransition();
    resetImg();
    gamelisten();
});


function gamelisten(){
    console.log('start');

    const ops = document.querySelectorAll('.option')
    ops.forEach(opt => opt.addEventListener('click',test));

    console.log("stopp");
}

function test(e){
    if(cPoint>=5 || pPoint>=5){
        return;
    }
    const name = e.target.classList[0];
    console.log(name);
    console.log(game(name));
    console.log(pPoint, cPoint);
    updateScore();
}

function updateScore() {
    const pS = document.querySelector('.pscore');
    const cS = document.querySelector('.cscore');
    pS.textContent = pPoint;
    cS.textContent = cPoint;
}

function wonTransition(){
    const cntr = document.querySelector('.container');
    cntr.classList.remove('lost');
    cntr.classList.add('won');
}
function lostTransition(){
    const cntr = document.querySelector('.container');
    cntr.classList.remove('won');
    cntr.classList.add('lost');
}
function removeTransition(){
    const cntr = document.querySelector('.container');
    cntr.classList.remove('won');
    cntr.classList.remove('lost');
}

function updateImg(){
    block.removeChild(block.childNodes[0]);
    block.appendChild(imgResult);
}
function resetImg(){
    block.removeChild(block.firstElementChild);
    imgResult.src="./images/question-mark-draw.png";
    block.appendChild(imgResult);
}

/*
function imgScale(name){
    let scaleimg=document.querySelector(`.${name}`);
    scaleimg.classList.add('imgScale');
}
*/
