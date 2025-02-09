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
const humanPick=getHumanChoice();
const computerPick=getComputerChoice();
function playRound(getHumanChoice,getComputerChoice){
    if (getHumanChoice === getComputerChoice){
     console.log("Its a tie! Both Chose" + getHumanChoice)
   }
   else if (( getHumanChoice=== "rock" &&  getComputerChoice=== "scissors") ||
   ( getHumanChoice=== "scissors" && getComputerChoice=== "paper") ||
   ( getHumanChoice=== "paper" &&  getComputerChoice=== "rock")){
    humanScore ++
    console.log("You Win!" + " " + getHumanChoice + " " + "beats" + " " + getComputerChoice)
    }
   else { 
    computerScore ++
    console.log("You Lose!" + " " + getComputerChoice + " " + "beats" + " " + getHumanChoice)
   
   }
};
playRound(humanPick,computerPick);
console.log ("Current Score = You:" + humanScore + " " + "Computer:" + computerScore)