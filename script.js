var gameOver = false;
var scoreBoard = {
    numWins: 0,
    numLosses: 0,
    numTies: 0
};

function playGame(){
    while(gameOver === false){
        var yourChoice = prompt('Please enter R, P or S').toUpperCase();
        while (yourChoice != 'R' && yourChoice != 'S' && yourChoice != 'P'){
            var yourChoice = prompt('Invalid choice, Please enter R, P or S').toUpperCase();
        }

        var cpuChoiceNum = Math.floor(Math.random()*3);
        var cpuChoiceLetter = ''
        if(cpuChoiceNum === 0){
            cpuChoiceLetter = 'R';
        }
        else if(cpuChoiceNum === 1){
            cpuChoiceLetter = 'P';
        }
        else if(cpuChoiceNum === 2){
            cpuChoiceLetter = 'S';
        }


        if(yourChoice === 'R'){
            if(cpuChoiceLetter === 'R'){
                scoreBoard.numTies +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}.\nYou tied.`);
            }
            else if (cpuChoiceLetter === 'P'){
                scoreBoard.numLosses +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}\nYou lost.`);
            }
            else if (cpuChoiceLetter === 'S'){
                scoreBoard.numWins+=1;
                alert(`You chose ${yourChoice}\nCPU chose ${cpuChoiceLetter}\nYou won!`);
            }
        }
        else if(yourChoice === 'P'){
            if(cpuChoiceLetter === 'P'){
                scoreBoard.numTies +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}.\nYou tied.`);
            }
            else if (cpuChoiceLetter === 'S'){
                scoreBoard.numLosses +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}\nYou lost.`);
            }
            else if (cpuChoiceLetter === 'R'){
                scoreBoard.numWins+=1;
                alert(`You chose ${yourChoice}\nCPU chose ${cpuChoiceLetter}\nYou won!`);
            }
        }
        else if(yourChoice === 'S'){
            if(cpuChoiceLetter === 'S'){
                scoreBoard.numTies +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}.\nYou tied.`);
            }
            else if (cpuChoiceLetter === 'R'){
                scoreBoard.numLosses +=1;
                alert(`You chose ${yourChoice}.\nCPU chose ${cpuChoiceLetter}\nYou lost.`);
            }
            else if (cpuChoiceLetter === 'P'){
                scoreBoard.numWins+=1;
                alert(`You chose ${yourChoice}\nCPU chose ${cpuChoiceLetter}\nYou won!`);
            }
        }

        alert(`Scoreboard:\nWins: ${scoreBoard.numWins}\nLosses: ${scoreBoard.numLosses}\nTies: ${scoreBoard.numTies}\n`);

        gameOver = !confirm(`Play again?`);
    }
}


playGame();



