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

const container0=document.querySelector(".container0");
const startText=document.createElement("div");
const startButton=document.createElement('button');
startText.textContent="Click here to start a game!"
startButton.textContent='START';
container0.appendChild(startText);
container0.appendChild(startButton);

const container1=document.querySelector(".container1");
const container2=document.querySelector(".container2");
// newElement container is used to hold the result of each round + final result
const newElement=document.createElement("div") 
newElement.setAttribute("id","resultContainer");
container2.appendChild(newElement);

let humanScore=0;
let computerScore=0;
let roundsPlayed=0;

startButton.addEventListener("click",displayGame);

function displayGame(){
    const option=document.createElement("div");
    option.textContent="Click on your choice"
    const btns=document.createElement("div");
    const btn1=document.createElement("button")
    btn1.textContent='Rock'
    const btn2=document.createElement("button")
    btn2.textContent='Scissors'
    const btn3=document.createElement("button")
    btn3.textContent='Paper'
    container1.appendChild(option);
    container1.appendChild(btns);
    startText.remove();
    startButton.remove();
    btns.appendChild(btn1);
    btns.appendChild(btn2);
    btns.appendChild(btn3);
    btn1.addEventListener("click",()=>playGame(btn1.textContent.toLowerCase(),getComputerChoice()));
    btn2.addEventListener("click",()=>playGame(btn2.textContent.toLowerCase(),getComputerChoice()));
    btn3.addEventListener("click",()=>playGame(btn3.textContent.toLowerCase(),getComputerChoice()));
}
function playGame(humanChoice,computerChoice){
    const roundResult=document.createElement("div");
    roundResult.setAttribute("class","roundResults")
    const finalResult=document.createElement("div");
    roundsPlayed++;
    console.log(roundsPlayed)
    // displayResult is the newElement we created earlier
    const displayResults=document.getElementById("resultContainer")
    displayResults.appendChild(roundResult);
    if(humanChoice===computerChoice){
        roundResult.textContent='equality';
    }
    else{
      switch(humanChoice){
      case 'rock':
        if(computerChoice=='scissors'){
            roundResult.textContent='You win! rock beats scissors';
            humanScore++;
        }
        else {
            roundResult.textContent='You lose! paper beats rock';
            computerScore++;
        }
      break;
      case 'scissors':
        if(computerChoice=='paper'){
            roundResult.textContent='You win! scissors beats paper';
            humanScore++;
        }
        else {
            roundResult.textContent='You lose! rock beats scissors';
            computerScore++;
        }
      break;
      case 'paper':
        if(computerChoice=='rock'){
            roundResult.textContent='You win! paper beats rock';
            humanScore++;
        }
        else {
            roundResult.textContent='You lose! scissors beats paper';
            computerScore++;
        }
      break;
    }
}
    if(roundsPlayed==5){
    if(humanScore==computerScore){
        finalResult.textContent='equality!';
    }
    else if(humanScore>computerScore){
        finalResult.textContent='You won! Congrats!';
    }
    else{
        finalResult.textContent='You lost! try again.'
    }
    displayResults.appendChild(finalResult);
    // reinitialized these variables in case user wanted to start another game 
    roundsPlayed=0;
    humanScore=0;
    computerScore=0;
    const gameOver=document.querySelector(".playAgain")
    const playAgain=document.createElement("div");
    playAgain.textContent='Click over here to play again!'
    const btn=document.createElement("button");
    btn.textContent='PLAY AGAIN'
    gameOver.appendChild(playAgain);
    gameOver.appendChild(btn);
    // this loop aims to remove the option and choices buttons that are covered in container1
    while(container1.firstChild){
    container1.removeChild(container1.firstChild);}
    btn.addEventListener("click",()=>{
        // to remove the previous rounds results + final result
        while(displayResults.firstChild){
        displayResults.removeChild(displayResults.firstChild)}
        gameOver.removeChild(playAgain);
        gameOver.removeChild(btn)
    });
    btn.addEventListener("click",displayGame);
}
}