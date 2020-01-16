export default function CheckResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return 0;
    }
    if (playerChoice > computerChoice){
        return 1;
    }
    if (playerChoice < computerChoice){
        return -1;
    }

   
}