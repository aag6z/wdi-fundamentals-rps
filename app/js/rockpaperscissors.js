////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   

    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove){ winner = "tie" }

    if (playerMove == "rock") {
        if(computerMove == "paper"){ winner = "computer" };
        if(computerMove == "scissors"){ winner = "player" };
    };

    if (playerMove == "paper") {
        if(computerMove == "rock"){ winner = "player" };
        if(computerMove == "scissors"){ winner = "computer" };
    };

    if (playerMove == "scissors") {
        if(computerMove == "paper"){ winner = "player" };
        if(computerMove == "rock"){ winner = "computer" };   
    };

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winnerRet;
    var x = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (x < 5) {
        winnerRet = rpsGame();
        if( winnerRet == "player"){
            playerWins += 1;
        }
        
        if(winnerRet == "computer"){
            computerWins += 1;
        }

        x += 1;
    }
    return [playerWins, computerWins];
}


function rpsGame() {
    var playerMovex;
    var computerMovex;

    playerMovex = getPlayerMove();
    computerMovex = getComputerMove();
    return getWinner(playerMovex, computerMovex);
}




}