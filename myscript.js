let humanScore=0
let computerScore=0
function getComputerChoice(){
    let int= Math.random()*2
     if (int = 0){
      return "Rock"
     }
     else if (int=1){
     return "Scissors"
     }
     else {
      return "Paper"
     }
  };
  function getHumanChoice(){
  let choice = prompt("Choose Rock Paper or Scissors")
    if (choice.toLowerCase() === "rock"){
      return "Rock"
    }
    else if (choice.toLowerCase() === "scissors"){
      return "Scissors"
    }
    else {
      return "Paper"
    }
  };
function playRound(getHumanChoice,getComputerChoice){
    let humanPick =getHumanChoice();
    let computerPick=getComputerChoice();
    if (humanPick===computerPick){
     return `Its a tie! Both Chose ${humanPick}`
   }
   else if (( humanPick === "Rock" &&  computerPick === "Scissors") ||
   ( humanPick === "Scissors" && computerPick === "Paper") ||
   ( humanPick === "Paper" &&  computerPick === "Rock")){
    humanScore ++
    return `You Win! ${humanPick} beats ${computerPick}`
    }
   else { 
    computerScore ++
    return `You Lose! ${computerPick} beats ${humanPick}`
   }
};
function playGame(playRound){
    for (let i = 0; i <=4; i++) {
        console.log(playRound(getHumanChoice,getComputerChoice))   
    }
    if (humanScore > computerScore) {
        return `You Win!`
    }
    else {
        return `You Lose!`
    } 
};
console.log(playGame(playRound))