let getComputerChoice = () => {
let arr = ['rock','paper','scissors']
let result = arr[Math.floor(Math.random()*arr.length)]

return result

}



function round(player,computer) {
    player = player.toLowerCase()
let ro = 'rock'
let pa = 'paper'
let sci = 'scissors'


if (player == computer) {
    return `It's tie!`

} else if (player == ro && computer == pa)
{  
return `Paper beats rock! Computer Won!`
}
else if (player == ro && computer == sci) {
    return 'Rock beats scissors! Player won!'
}
else if (player == pa && computer == ro) {
    return 'Paper beats rock! Player won!'
}
else if (player == pa && computer == sci) {
    return 'Scissors beats paper! Computer won!'
}
else if (player == sci && computer == ro){
    return 'Rock beats Scissors! Computer won!'
}
else if (player == sci && computer == pa){
    return `Scissors beats paper! Player won!`
}

}




function game() {
let team1 = 0;
let team2 = 0;


for(let i = 0; i < 5; i++){
let playerChoice = prompt(`Rock,Paper Scissors?`);
let computerChoice = getComputerChoice()
let gameResult = round(playerChoice, computerChoice)
    switch (gameResult) {
        case `Scissors beats paper! Player won!`:
        case 'Paper beats rock! Player won!':
        case 'Rock beats scissors! Player won!':
            team1++
            
            break;
        case 'Rock beats Scissors! Computer won!':
        case 'Scissors beats paper! Computer won!':
        case `Paper beats rock! Computer Won!`:
            team2++
            break;
            default:
                console.log('Round is tie')
    }
    console.log(`Player: ${team1} Computer: ${team2}`);

}
if (team1 > team2){
     console.log(`Player Won!`)
} else if (team2 > team1)
{ console.log(`Computer Won!`)}
else {
     console.log('Game is tie!')
}
}  

game()