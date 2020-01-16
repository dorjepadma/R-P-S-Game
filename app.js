//initialize initial fetch state
import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';
//I am not clear onw how to integrate these two funcitons into the PerformanceNavigationTiming, thus they are not integrated yet.
// grabing Elements for DOM
const resultDisplay = document.getElementById('result-display');
const myButton = document.getElementById('submit-guess');
//I have not incorporated the result image code into the JS or the HTML
const resultImage = document.getElementById('result-image');
const winsDisplay = document.getElementById('user-score');
const lossesDisplay = document.getElementById('computer-score');
const tiesDisplay = document.getElementById('ties');
// initial states
let wins = 0;
let losses = 0;
let ties = 0;
// add event listeners I believe I need two event listeners here. one for get random throw and one for check results...?
//comparing the computer vs the user choice
myButton.addEventListener('click', () =>{
    const userInput = document.querySelector ('input:checked');
    const userChoice = userInput.nodeValue;
    const computerChoice = getRandomThrow;
    const result = checkResult (userChoice, computerChoice);
    console.log('user', userChoice);
    console.log('computer', computerChoice);
    console.log(result);
//here the TA's put in images for computer choice
    if (result === 'You win!'){
        wins++;
        winsDisplay.textContent = wins;
        resultDisplay.classList.remove('hidden');
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