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
}
