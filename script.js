function getComputerChoice(){
    let choice;
    let randomChoice=Math.floor(Math.random()*100)+1;
    if(randomChoice>70){
        choice='rock';
    }
    else if(randomChoice>30){
        choice='scissors';
    }
    else {
        choice='paper';
    }
    return choice;
}
function getHumanChoice() {
    let choice=prompt('enter your choice :');
    choice=choice.toLowerCase();
    while(choice!='paper' && choice !='scissors' && choice!='rock'){
        choice=(prompt('please enter a valid option (rock,paper,scissors) :')).toLowerCase();
    }
    return choice;
}
function playGame(){
    let humanScore=0, computerScore=0;
    function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        alert('equality');
    }
    else{
      switch(humanChoice){
      case 'rock':
        if(computerChoice=='scissors'){
            alert('You win! rock beats scissors');
            humanScore++;
        }
        else {
            alert('You lose! paper beats rock');
            computerScore++;
        }
      break;
      case 'scissors':
        if(computerChoice=='paper'){
            alert('You win! scissors beats paper');
            humanScore++;
        }
        else {
            alert('You lose! rock beats scissors');
            computerScore++;
        }
      break;
      case 'paper':
        if(computerChoice=='rock'){
            alert('You win! paper beats rock');
            humanScore++;
        }
        else {
            alert('You lose! scissors beats paper');
            computerScore++;
        }
      break;
    }
    }
}
 for(let i=0;i<5;i++) {
    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
 }
 if(humanScore>computerScore){
    alert('You won! Congratulations!')
 }
 else if(humanScore<computerScore){
    alert('You lost! try again!');
 }
 else {
    alert('equality!');
 }
}
console.log(playGame())