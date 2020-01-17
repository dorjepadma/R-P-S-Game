export default function getRandomThrow(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'paper';
    }
    if (randomNumber === 2) {
        return 'rock';
    }
    if (randomNumber === 3){
        return 'scissors';
    }
    function checkResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice){
            console.log('Tie!');
            return 'Tie!';
        }
        else if (playerChoice === 'paper' && computerChoice === 'rock')
        {
            console.log ('You win!');
            return 'You win!';
        } else if (playerChoice === 'rock' && computerChoice === 'scissors')
        {
            console.log ('You win!');
            return 'You win!';
        } else if (playerChoice === 'scissors' && computerChoice === 'paper')
        {
            console.log ('You win!');
            return 'You win!';
        } else if (playerChoice === 'paper' && computerChoice === 'scissors')
        {
            console.log ('Computer Wins!');
            return 'Computer Wins!';
        } else if (playerChoice === 'rock' && computerChoice === 'paper')
        {
            console.log ('Computer Wins!');
            return 'Computer Wins!';
        } else (playerChoice === 'scissors' && computerChoice === 'rock');
        {
            console.log ('Computer Wins!');
            return 'Computer Wins!';
        }
    }
    
    
    
}
