export default function checkResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        console.log('Tie!');
        return 'Tie!';
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock')
    {   console.log ('You Win!');
        return 'You Win!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log ('You Win!');
        return 'You Win!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log ('You Win!');
        return 'You Win!';
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


