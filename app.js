//initialize initial fetch state
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';
//I am not clear onw how to integrate these two funcitons into the PerformanceNavigationTiming, thus they are not integrated yet.
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
// add event listeners I believe I need two event listeners here. one for get random throw and one for check results...?
//comparing the computer vs the user choice
myButton.addEventListener('click', () =>{
    
    const userInput = document.querySelector('input:checked');
    const userChoice = userInput.value;
    const computerChoice = getRandomThrow();
    const result = checkResult(userChoice, computerChoice);
    
//here the TA's put in images for computer choice
    if (result === 'You win!'){
        wins++;
        winsDisplay.textContent = wins;//update state
        resultDisplay.classList.remove('hidden');//update dom
        resultDisplay.textContent = 'You win!';
    } else if (result === 'Computer Wins!'){
        losses++;
        lossesDisplay.textContent = losses;
        resultDisplay.classList.remove('hidden');
        resultDisplay.textContent = 'Computer Wins!!';
    } else if (result === 'tie!'){ 
        ties++;
        tiesDisplay.textContent = ties;
        resultDisplay.classList.remove ('hidden');
        resultDisplay.textContent = 'Tie!';
    }
    //maybe almost there again
});