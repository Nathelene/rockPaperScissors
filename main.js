//////////VARIABLES//////////////////////
var classicFighters = [
  { class: "fighter-image", id: "paper", src: "src/happy-paper.png" },
  { class: "fighter-image", id: "rock", src: "src/happy-rocks.png" },
  { class: "fighter-image", id: "scissors", src: "src/happy-scissors.png" },
];

var difficultFighters = [
  { class: "fighter-image", id: "paper2", src: "src/happy-paper.png" },
  { class: "fighter-image", id: "rock2", src: "src/happy-rocks.png" },
  { class: "fighter-image", id: "scissors2", src: "src/happy-scissors.png" },
  { class: "fighter-image", id: "iguana", src: "src/iguana.png" },
  { class: "fighter-image", id: "alien", src: "src/happy-alien.png"},
];

var rockImage = document.querySelector("#rock");
var paperImage = document.querySelector("#paper");
var scissorsImage = document.querySelector("#scissors");
var rockImage2 = document.querySelector("#rock2");
var paperImage2 = document.querySelector("#paper2");
var scissorsImage2 = document.querySelector("#scissors2");
var alienImage = document.querySelector("#alien");
var iguanaImage = document.querySelector("#iguana");
var classicGameButton = document.querySelector("#classic");
var difficultGameButton = document.querySelector("#difficult");
var showFightersPage = document.querySelector(".show-fighters");
var humanScore = document.querySelector("#human-score");
var computerScore = document.querySelector("#computer-score");
var changeGameButton = document.querySelector(".change-game-button");
var selectGameButton = document.querySelector(".game-option-button")
var selectFighter = document.querySelector(".choose-fighter-image")
var computerResult;

////Data Model
var human = {
  wins: 0,
  resultMessage:''
};

var computer = {
  wins: 0,
};

/////////////////EVENT LISTENERS//////////////////////
changeGameButton.addEventListener("click", showHomeView)

showFightersPage.addEventListener("click",function(event) {
   console.log(event.target.id)
    if (event.target.id === 'classic') {
        displayClassicGame(event)
    } else if(event.target.id === 'difficult') {
        displayDifficultGame(event)
    }
});

selectFighter.addEventListener("click",function(event) {
    if (event.target.classList.contains('fighter-image-classic')) {
        displayClassicGameResults(event)
    } else if (event.target.classList.contains('fighter-image-difficult')) {
        displayDifficultGameResults(event)
    }
});

///////////FUNCTIONS//////////////////////////////
function addWin(){
    if (human.resultMessage === '🎉 YOU WIN! 🎉'){
    human.wins += 1;
    humanScore.innerHTML = `
      <h1>HUMAN 😎</h1>
      <p>Wins:${human.wins}</p>`;
    } else if (human.resultMessage === 'YOU LOSE!'){
        computer.wins += 1;
    computerScore.innerHTML = `
      <h4>COMPUTER 💻</h4>
      <p>Wins:${computer.wins}`;
    }
};

function showHiddenClass(elements){
    for ( var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('hidden')
    }
  };
  
  function removeHiddenClass(elements){
    for ( var i = 0; i < elements.length; i++) {
      elements[i].classList.add('hidden')
    }
  };

function showHomeView(){
    showFightersPage.innerHTML = `<h3>Choose Your Game!</h3> 
    <div class="game-option-button">
      <button class="level-button-1" id="classic">
        <p>-CLASSIC-</p>
        rock > scissors<br/>paper > rock<br/>scissors > paper
      </button>
      <button class="level-button-2" id="difficult">
        <p>-DIFFICULT-</p>
        rock > scissors & iguana paper > rock & alien<br/> 
        scissors > paper & iguana iguana > paper & alien<br/>alien > scissors & rock
      </button>
    </div>`
    removeHiddenClass([rockImage,paperImage,scissorsImage,changeGameButton,rockImage2,paperImage2,scissorsImage2,alienImage,iguanaImage]);
};

function displayClassicGame() {
  showFightersPage.innerHTML = `<h3>Choose Your Fighter!</h3>`;
  showHiddenClass([rockImage,paperImage,scissorsImage,changeGameButton])
};

function displayDifficultGame() {
  showFightersPage.innerHTML = `<h3>Choose Your Fighter!</h3>`;
  showHiddenClass([rockImage2,paperImage2,scissorsImage2,alienImage,iguanaImage,changeGameButton]);
};

function computerReturnsFighter(array) {
  computerResult = Math.floor(Math.random() * array.length);
  return computerResult;
};

function displayClassicGameResults(event) {
  determiningClassicWin(event);
  determiningClassicLossOrTie(event)
};

function displayDifficultGameResults(event) {
  determineDifficultWin(event);
  determineDifficultLossOrTie(event)
};

////////////Classic Game Functions///////////////
function determiningClassicWin(event) {
  computerReturnsFighter(classicFighters);
console.log(event.target.id)
console.log(classicFighters[computerResult].id)
  if ( event.target.id === rockImage.id && classicFighters[computerResult].id === "scissors") {
    human.resultMessage = '🎉 YOU WIN! 🎉'
    gameResultClassic(event)
  } else if ( event.target.id === scissorsImage.id && classicFighters[computerResult].id === "paper") {
    human.resultMessage = '🎉 YOU WIN! 🎉'
    gameResultClassic(event)
  } else if ( event.target.id === paperImage.id && classicFighters[computerResult].id === "rock") {
    human.resultMessage = '🎉 YOU WIN! 🎉'
    gameResultClassic(event)
  }
   setTimeout(displayClassicGame, 2000)
};

function determiningClassicLossOrTie(event) {
  if (event.target.id === rockImage.id && classicFighters[computerResult].id === "paper") {
    human.resultMessage = 'YOU LOSE!'
    gameResultClassic(event)
  } else if (event.target.id === paperImage.id && classicFighters[computerResult].id === "scissors") {
    human.resultMessage = 'YOU LOSE!'
    gameResultClassic(event)
  } else if (event.target.id === scissorsImage.id && classicFighters[computerResult].id === "rock") {
    human.resultMessage = 'YOU LOSE!'
    gameResultClassic(event)
  } else if (event.target.id === classicFighters[computerResult].id) {
    human.resultMessage = `IT'S A TIE!`
    gameResultClassic(event)
  }
   setTimeout(displayClassicGame, 2000)
};

function gameResultClassic(event){
    showFightersPage.innerHTML = 
    `<h3>${human.resultMessage}</h3>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
    <img class="fighter-image" id="${classicFighters[computerResult].id}" src="${classicFighters[computerResult].src}"/>`;
  
  addWin()
  removeHiddenClass([rockImage,paperImage,scissorsImage,iguanaImage,alienImage,changeGameButton]);
};

//////////////Difficult Game Functions///////////
function determineDifficultWin(event) {
  computerReturnsFighter(difficultFighters);
  console.log(event.target.id)
  console.log(difficultFighters[computerResult].id)

  if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "iguana")) {
        human.resultMessage = '🎉 YOU WIN! 🎉'
    gameResultDifficult(event)
  } else if ((event.target.id === paperImage2.id && difficultFighters[computerResult].id === "rock2") || 
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "alien")) {
        human.resultMessage = '🎉 YOU WIN! 🎉'
    gameResultDifficult(event)
  } else if ((event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "iguana")) {
        human.resultMessage = '🎉 YOU WIN! 🎉'
        gameResultDifficult(event)
  } else if ((event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "alien")) {
        human.resultMessage = '🎉 YOU WIN! 🎉'
        gameResultDifficult(event)
  } else if ((event.target.id === alienImage.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === "rock2")) {
        human.resultMessage = '🎉 YOU WIN! 🎉'
        gameResultDifficult(event)
  }
  setTimeout(displayDifficultGame, 2000);
};

function determineDifficultLossOrTie(event) {
 
  if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "alien") || 
    (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "paper2")) {  
        human.resultMessage = 'YOU LOSE!'
        gameResultDifficult(event)
  } else if ((event.target.id === paperImage2.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id ===  "iguana")) {
        human.resultMessage = 'YOU LOSE!'
        gameResultDifficult(event)
  } else if ((event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "alien") || 
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "rock2")) {
        human.resultMessage = 'YOU LOSE!'
        gameResultDifficult(event)
  } else if ((event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "rock2") || 
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id ==="scissors2")) {
        human.resultMessage = 'YOU LOSE!'
        gameResultDifficult(event)
  } else if ( (event.target.id === alienImage.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === 'iguana')) {
        human.resultMessage = 'YOU LOSE!'
        gameResultDifficult(event)
  } else if ((event.target.id === difficultFighters[computerResult].id)){
    human.resultMessage = `IT'S A TIE!`
         gameResultDifficult(event)
  }
  setTimeout(displayDifficultGame, 2000);
};

function gameResultDifficult(event){
    showFightersPage.innerHTML = `<h3>${human.resultMessage}</h3>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
    <img class="fighter-image" id="${difficultFighters[computerResult].id}" src="${difficultFighters[computerResult].src}"/>`;

  addWin()
  removeHiddenClass([rockImage2,paperImage2,scissorsImage2,alienImage,iguanaImage,changeGameButton]);
}


