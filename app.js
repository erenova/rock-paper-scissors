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
    return `Berabere!?!`

} else if (player == ro && computer == pa)
{  
return `Paper Beats Rock! Computer Won!`
}
else if (player == ro && computer == sci) {
    return 'Rock Beats Scissors! Player Won!'
}
else if (player == pa && computer == ro) {
    return 'Paper Beats Rock! Player Won!'
}
else if (player == pa && computer == sci) {
    return 'Scissors Beats Paper! Computer Won!'
}
else if (player == sci && computer == ro){
    return 'Rock Beats Scissors! Computer Won!'
}
else if (player == sci && computer == pa){
    return `Scissors Beats Paper! Player Won!`
}

}




function game() {



let playerChoice = prompt(`Rock,Paper Scissors?`);
let computerChoice = getComputerChoice()
let gameResult = round(playerChoice, computerChoice)
   
console.log(gameResult)
}

  

game()


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

function game() {


}
let res = document.getElementById('result')


    let player1 = 0;
    let computer1 = 0;
    for (let index = 0; index < 1; index++) {
        rock.addEventListener('click',function() {
    
            let playerChoice = 'rock';
            let computerChoice = getComputerChoice();
            let gameResult = round(playerChoice, computerChoice);
            if (gameResult == 'Rock Beats Scissors! Player Won!') {
                player1++
            } else if (gameResult == `Paper Beats Rock! Computer Won!`){
                computer1++
            } else {}
            res.textContent = `${gameResult} Player: ${player1} Computer: ${computer1}`;
            if (player1 >= 3) {
                res.textContent = `Player Score Is 3! Player Won!`
            } else if ( computer1 >= 3){
                res.textContent = `Computer Score Is 3! Computer Won!`
            
            }


        })
        
        paper.addEventListener('click',function() {
            
            let playerChoice = 'paper';
            let computerChoice = getComputerChoice()
            let gameResult = round(playerChoice, computerChoice)
            if (gameResult == 'Paper Beats Rock! Player Won!') {
                player1++
            } else if (gameResult == 'Scissors Beats Paper! Computer Won!') {
                computer1++   
            }
            res.textContent = `${gameResult} Player: ${player1} Computer: ${computer1}`;
            if (player1 >= 3) {
                res.textContent = `Player Score Is 3! Player Won!`
            } else if ( computer1 >= 3){
                res.textContent = `Computer Score Is 3! Computer Won!`
            
            }
        })
        
        scissors.addEventListener('click',function() {
            
            let playerChoice = 'scissors';
            let computerChoice = getComputerChoice()
            let gameResult = round(playerChoice, computerChoice)
            if (gameResult == `Scissors Beats Paper! Player Won!`) {
                player1++
            } else if (gameResult == 'Rock Beats Scissors! Computer Won!') {
                computer1++
            }
            res.textContent = `${gameResult} Player: ${player1} Computer: ${computer1}`;
            if (player1 >= 3) {
                res.textContent = `Player Score Is 3! Player Won!`
            } else if ( computer1 >= 3){
                res.textContent = `Computer Score Is 3! Computer Won!`
            
            }
        })
        
    }








res.setAttribute('style','font-size:25px;font-weight:bold')