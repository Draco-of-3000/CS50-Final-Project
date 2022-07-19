// Made an array for 3 possible answers
let rockPaperOrScissors = ['ROCK', 'PAPER', 'SCISSORS'];

// A function to make the CPU select Rock, Paper or Scissors at random
function computerPlay() {
    return rockPaperOrScissors [Math.floor(Math.random() * rockPaperOrScissors.length)];
}

// Declaration of scores and return values
let computerScore = parseInt(0);
let playerScore = parseInt(0);
let tiedScore = parseInt(0);

    document.addEventListener('DOMContentLoaded', function () {

        //When User Clicks Rock
        let rock = document.querySelector('#rock');
        rock.addEventListener('click', function () {
            playRound('ROCK', computerPlay());
        });

        // When User Clicks Paper
        let paper = document.querySelector('#paper');
        paper.addEventListener('click', function () {
            playRound('PAPER', computerPlay());
        });

        // When User Clicks Scissors
        let scissors = document.querySelector('#scissors');
        scissors.addEventListener('click', function () {
            playRound('SCISSORS', computerPlay());
        });
    })

// A function that plays a single round of Rock Paper Scissors. 
function playRound (playerSelection, computerSelection) {
    if(computerScore > 0 && playerScore > 0 && computerSelection === playerSelection){
        tiedScore++;
        document.querySelector('#feedback2').textContent = `There are ${tiedScore} ties`;
    }
    else if(playerSelection == 'ROCK'){
        if(computerSelection == 'PAPER'){
            computerScore++;
            document.querySelector('#feedback').textContent = `You lost, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#computerscore').textContent = `WorldEater score: ${computerScore}`;
        }else{
            playerScore++;
            document.querySelector('#feedback').textContent = `You won, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#playerscore').textContent = `Your score: ${playerScore}`;
        }
    }

    else if(playerSelection == 'SCISSORS'){
        if(computerSelection == 'ROCK'){
            computerScore++;
            document.querySelector('#feedback').textContent = `You lost, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#computerscore').textContent = `WorldEater score: ${computerScore}`;
        }else{
            playerScore++;
            document.querySelector('#feedback').textContent = `You won, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#playerscore').textContent = `Your score: ${playerScore}`;
        }
    }

    else if(playerSelection == 'PAPER'){
        if(computerSelection == 'SCISSORS'){
            computerScore++;
            document.querySelector('#feedback').textContent = `You lost, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#computerscore').textContent = `WorldEater score: ${computerScore}`;
        }else{
            playerScore++;
            document.querySelector('#feedback').textContent = `You won, WorldEater chose ${computerSelection} and you chose ${playerSelection}`;
            document.querySelector('#playerscore').textContent = `Your score: ${playerScore}`;
        }
    }


    if (computerScore > 4){
        window.location.href = "../failed.html"
    } else if (playerScore > 4) {
        window.location.href = "../congratulations.html"
    }
}




// Copying computerPlay() function into a variable
const computerSelection = computerPlay();

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(".button");
    const audio = document.querySelector("audio");

    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.volume = 1.0;
            audio.play();
        }
    });
})
