//initialize initial fetch state
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

// grabing Elements for DOM
const resultDisplay = document.getElementById('result-display');
const myButton = document.getElementById('dorjes-button');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const tiesDisplay = document.getElementById('ties-display');
// initial states
let wins = 0;
let losses = 0;
let ties = 0;
//comparing the computer vs the user choice
myButton.addEventListener('click', () =>{
    
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
    console.log(result);
//here the TA's put in images for computer choice
    if (result === 'You Win!'){
        wins++;
        winsDisplay.textContent = wins;//update state
        resultDisplay.classList.remove('hidden');//update dom
        resultDisplay.textContent = 'You Win!';
    } else if (result === 'Computer Wins!'){
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Computer Wins!!';
    } else if (result === 'Tie!'){
        ties++;
        tiesDisplay.textContent = ties;
        resultDisplay.classList.remove ('hidden');
        resultDisplay.textContent = 'Tie!';
    }
    
});