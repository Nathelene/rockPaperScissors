//////////VARIABLES//////////////////////
var classicFighters = ['src/happy-paper.png','src/happy-rocks.png','src/happy-scissors.png'];
var rockImage = document.querySelector('#rock');
var paperImage = document.querySelector('#paper');
var scissorsImage = document.querySelector('#scissors');
var classicGameButton = document.querySelector('#classic');
var difficultGameButton = document.querySelector('#difficult');
var gameOptionHomePage = document.querySelector('.game')
var humanScore = document.querySelector('#human-score');
var computerScore = document.querySelector('#computer-score');
var allImages = document.querySelector('.hidden')
var computerResult;
// var changeGameButton = document.querySelector('.change-game-button')

////Data Model
var human = {
    wins:0
};

var computer = {
    wins:0
};
  
/////////////////EVENT LISTENERS//////////////////////
/// when user clicks classic button classic game is displayed
classicGameButton.addEventListener('click',displayClassicGame)

/////////////////////// when user clicks image computerReturnsFighter is called 
rockImage.addEventListener('click',displayGameResults)
paperImage.addEventListener('click',displayGameResults)
scissorsImage.addEventListener('click',displayGameResults)




/////////////FUNCTIONS//////////////////////////////

function displayClassicGame(){
    gameOptionHomePage.innerHTML =
    `<h2>Choose Your Fighter!</h2>`
    allImages.classList.remove('hidden')
}

//////This function will have the computer choose a random fighter
 function computerReturnsFighter(classicFighters) {
 computerResult = Math.floor(Math.random() * classicFighters.length);

   return computerResult
 };

 /////This function will display the results after the computer has picked a random fighter and add a point to the wins
 function displayGameResults(event){
    determiningWin(event);
    determiningTie(event);
    determiningLoss(event)
 };


 function determiningWin(event){
    computerReturnsFighter(classicFighters)
    ////////computer loses and human gets a point
    console.log(computerResult)
    console.log(event.target.id)
    if(event.target.id === rockImage.id && computerResult === 2){
    }else if(event.target.id === paperImage.id && computerResult === 1){
    }else if(event.target.id === scissorsImage.id && computerResult === 0){
        gameOptionHomePage.innerHTML = 
        `<h2>YOU WIN!</h2> `
        allImages.classList.add('hidden')
        // changeGameButton.classList.remove('hidden')
        human.wins += 1
        humanScore.innerHTML = `<p>Wins:${human.wins}`
    }   
};

    /////////Human loses and computer gets a point
function determiningTie(event){
    computerReturnsFighter(classicFighters)
    if(event.target.id === rockImage.id && computerResult === 1){
    } else if(event.target.id === paperImage.id && computerResult === 0){
    }else if(event.target.id === scissorsImage.id && computerResult === 2){
        gameOptionHomePage.innerHTML =
        `<h2>IT'S A TIE!</h2>`
        allImages.classList.add('hidden')
        // changeGameButton.classList.remove('hidden')
    }
};

function determiningLoss(event){
    computerReturnsFighter(classicFighters)
    if(event.target.id === rockImage.id && computerResult === 1){
    }else if(event.target.id === paperImage.id && computerResult === 2){
    }else if(event.target.id === scissorsImage.id && computerResult === 0){
    
        gameOptionHomePage.innerHTML =
        `<h2>YOU LOSE!</h2>`
        allImages.classList.add('hidden')
        // changeGameButton.classList.remove('hidden')
        computer.wins += 1
        computerScore.innerHTML = `<p>Wins:${computer.wins}`
    }
};



 