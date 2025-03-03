alert("Pick rock, paper, or scissors")
let humanScore=0
let computerScore=0
let roundOver = document.querySelector(`.roundOver`)
let gameInfo = document.querySelector(`.gameInfo`)
let gameOver = document.querySelector(`.gameOver`)
let roundInfo = document.querySelector(`.roundInfo`)

function getComputerChoice(){
    let randomChoice = (Math.floor(Math.random() * 3) + 1);
    if (randomChoice === 1) randomChoice = ('Rock');
    else if (randomChoice === 2) randomChoice = ('Scissors');
    else randomChoice = ('Paper');
    return (randomChoice);
  }

function playRound(humanPick,computerPick){
  roundInfo.textContent= `Computer chose` + ` ` + computerPick;
    if (humanPick===computerPick){
     roundOver.textContent= `Its a tie! Both Chose` + ` ` + humanPick; 
   }
   else if (( humanPick === "Rock" &&  computerPick === "Scissors") ||
   ( humanPick === "Scissors" && computerPick === "Paper") ||
   ( humanPick === "Paper" &&  computerPick === "Rock")){
    humanScore = ++humanScore;
    roundOver.textContent=`You Win!` + ` ` + humanPick + ` ` + `beats` + ` ` + computerPick; 
    }
   else { 
    computerScore = ++computerScore;
    roundOver.textContent= `You Lose!`+ ` ` + computerPick + ` ` +`beats` + ` ` + humanPick;
   }

};
const buttons=document.querySelectorAll(`button`);
buttons.forEach((button)=>{
 button.addEventListener("click", () =>{
 let humanP = button.id;
 let computerP = getComputerChoice();
 playRound(humanP,computerP);
 playgame();
 });
});

function playgame(){
gameInfo.textContent=`Player- ${humanScore} Computer-${computerScore}`;
if (humanScore===5){
  gameOver.textContent=`Player Win!!!`
}
else if (computerScore===5){
  gameOver.textContent=`You Lost 💀`
}
}
