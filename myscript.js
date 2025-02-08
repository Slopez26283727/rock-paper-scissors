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
  let Human=getHumanChoice()
  console.log(Human)
  let Computer=getComputerChoice()
  console.log(Computer) 