let randomNumber= (parseInt(Math.random()*100+1))
const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField')
const remainingGuesses = document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi');
const guessSlot= document.querySelector('.guesses');
const startOver= document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuesses = [];
let numGuess = 1;
let playGame = true;
if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault();
    const guess= parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
 if(isNaN(guess)) {alert("Please enter a valid number")}
 else if (guess<1) {alert("Entry should be greater than 1")}
 else if(guess>100){
  alert("Entry should be less than 100")
 }
 else { prevGuesses.push(guess); 
  displayGuess(guess);
 if(numGuess>10) {
    displayMessage(`Game Over \n Random Number was ${randomNumber}`);
    endGame();
 }
 else {
   checkGuess(guess);
 }

}
}

function checkGuess(guess){
  if(guess==randomNumber){
    displayMessage(`Congratulations! You Won!!`);
    endGame();
  }
  else if(guess<randomNumber){
    displayMessage(`Number is TOO low`);
  }
  else if(guess>randomNumber){
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess){
  userInput.value="";
  guessSlot.innerHTML+=`${guess} ,`;
  numGuess++;
  remainingGuesses.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message} </h2>`;
}
function newGame(){
 const newGameButton =document.querySelector('#newGame');
  newGameButton.addEventListener('click',(e)=>{
    randomNumber= (parseInt(Math.random()*100+1));
    prevGuesses= [];
    numGuess=1;
    guessSlot.innerHTML="";
    remainingGuesses.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame=true;
  })
}

function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=  '<h2 id="newGame">Start new Game </h2>'
  startOver.appendChild(p);
  playGame= false;
  newGame();
}
