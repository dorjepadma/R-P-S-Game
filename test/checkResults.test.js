import checkResult from '../check-result.js';
QUnit.module; ('testing checkResult');
const test = QUnit.test;

test('checkResults should take equal answers and return as true', function(assert) {
    const playerChoice = 'scissors';
    const computerChoice = 'scissors';
    const gameResult = checkResult(playerChoice, computerChoice);
    assert.equal (gameResult, 'Tie!');
});
test('numberGuess should take player higher answer and return as 1', function(assert) {
    const playerChoice = 'paper';
    const computerChoice = 'rock';
    const gameResult = checkResult(playerChoice, computerChoice);
    assert.equal(gameResult, 'You win!');
});
test('numberGuess should take player lower than computer and answer -1', function(assert) {
    const playerChoice = 'scissors';
    const computerChoice = 'rock';
    const gameResult = checkResult(playerChoice, computerChoice);
    assert.equal(gameResult, 'Computer Wins!');
});