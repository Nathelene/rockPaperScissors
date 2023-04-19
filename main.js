//////////VARIABLES//////////////////////
var classicFighters = [
  {
    class: "fighter-image",
    id: "paper",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-paper.png",
  },
  {
    class: "fighter-image",
    id: "rock",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-rocks.png",
  },
  {
    class: "fighter-image",
    id: "scissors",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-scissors.png",
  },
];

var difficultFighters = [
  {
    class: "fighter-image",
    id: "paper",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-paper.png",
  },
  {
    class: "fighter-image",
    id: "rock",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-rocks.png",
  },
  {
    class: "fighter-image",
    id: "scissors",
    src: "file:///Users/nataliebaker/rockPaperScissors/src/happy-scissors.png",
  },
  { class: "fighter-image", id: "iguana", src: "src/iguana.png" },
  { class: "fighter-image", id: "alien", src: "src/alien.png" },
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
var gameOptionHomePage = document.querySelector(".game");
var humanScore = document.querySelector("#human-score");
var computerScore = document.querySelector("#computer-score");
var computerResult;
var changeGameButton = document.querySelector("change-game-button")

////Data Model
var human = {
  wins: 0,
};

var computer = {
  wins: 0,
};

/////////////////EVENT LISTENERS//////////////////////
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);

rockImage.addEventListener("click", displayClassicGameResults);
paperImage.addEventListener("click", displayClassicGameResults);
scissorsImage.addEventListener("click", displayClassicGameResults);

rockImage2.addEventListener("click", displayDifficultGameResults);
paperImage2.addEventListener("click", displayDifficultGameResults);
scissorsImage2.addEventListener("click", displayDifficultGameResults);
alienImage.addEventListener("click", displayDifficultGameResults);
iguanaImage.addEventListener("click", displayDifficultGameResults);

/////////////FUNCTIONS//////////////////////////////
function displayClassicGame() {
  gameOptionHomePage.innerHTML = `<h2>Choose Your Fighter!</h2>`;
  rockImage.classList.remove("hidden");
  paperImage.classList.remove("hidden");
  scissorsImage.classList.remove("hidden");
};

function displayDifficultGame() {
  gameOptionHomePage.innerHTML = `<h2>Choose Your Fighter!</h2>`;
  rockImage2.classList.remove("hidden");
  paperImage2.classList.remove("hidden");
  scissorsImage2.classList.remove("hidden");
  alienImage.classList.remove("hidden");
  iguanaImage.classList.remove("hidden");
};

function computerReturnsFighter(array) {
  computerResult = Math.floor(Math.random() * array.length);

  return computerResult;
};

/////This function will display the results after the computer has picked a random fighter and add a point to the wins
function displayClassicGameResults(event) {
  determiningClassicWin(event);
  determiningClassicTie(event);
  determiningClassicLoss(event);
};

function displayDifficultGameResults(event) {
  determineDifficultWin(event);
  determineDifficultTie(event);
  determineDifficultLoss(event);
};

function determiningClassicWin(event) {
  computerReturnsFighter(classicFighters);
  console.log(event.target.id);
  console.log(classicFighters[computerResult].id);
 
  if (event.target.id === rockImage.id && computerResult === 2) {
    winClassic(event);
  } else if (event.target.id === scissorsImage.id && computerResult === 0) {
    winClassic(event);
  } else if (event.target.id === paperImage.id && computerResult === 1) {
    winClassic(event);
  }
  setTimeout(displayClassicGame, 5000);
};



function determiningClassicTie(event) {
  computerReturnsFighter(classicFighters);
  if (event.target.id === classicFighters[computerResult].id) {
    tieClassic(event);
  }
  setTimeout(displayClassicGame, 5000);
};


function determiningClassicLoss(event) {
  computerReturnsFighter(classicFighters);
  if (event.target.id === rockImage.id && computerResult === 0) {
    lossClassic(event);
  } else if (event.target.id === paperImage.id && computerResult === 2) {
    lossClassic(event);
  } else if (event.target.id === scissorsImage.id && computerResult === 1) {
    lossClassic(event);
  }
  setTimeout(displayClassicGame, 5000);
};

//////////////Difficult///////////
function determineDifficultWin(event) {
  computerReturnsFighter(difficultFighters);

  console.log(event.target.id);
  console.log(difficultFighters[computerResult].id);

  if (event.target.id === rockImage.id && computerResult === 2 || 3) {
    winDifficult(event);
  } else if (event.target.id === scissorsImage.id && computerResult === 0) {
    winDifficult(event);
  } else if (event.target.id === paperImage.id && computerResult === 1 || 4) {
    winDifficult(event);
  } else if (event.target.id === iguanaImage.id && computerResult === 0 || 4) {
    winDifficult(event);
  } else if (event.target.id === paperImage.id && computerResult === 0 || 1) {
    winDifficult(event);
  }
  setTimeout(displayDifficultGame, 5000);
}

function determineDifficultTie(event) {
  computerReturnsFighter(difficultFighters);

  if (event.target.id === difficultFighters[computerResult].id) {
    tieDifficult(event);
  }
  setTimeout(displayDifficultGame, 5000);
};

function determineDifficultLoss(event) {
  computerReturnsFighter(difficultFighters);

  if (event.target.id === rockImage.id && computerResult === 0 || 4) {
    lossDifficult(event);
  } else if (event.target.id === paperImage.id && computerResult === 2 || 3) {
    lossDifficult(event);
  } else if (event.target.id === scissorsImage.id && computerResult === 1 || 4) {
    lossDifficult(event);
  } else if (event.target.id === iguanaImage.id && computerResult === 1) {
    lossDifficult(event);
  } else if (event.target.id === alienImage.id && computerResult === 0 || 3) {
    lossDifficult(event);
  }
  setTimeout(displayDifficultGame, 5000);
};

function winClassic(event) {
  gameOptionHomePage.innerHTML = `<h2>YOU WIN!</h2> 
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${difficultFighters[computerResult].id} src="${difficultFighters[computerResult].src}">
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  alienImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");

  human.wins += 1;
  humanScore.innerHTML = `
    <h3>HUMAN 😎</h3>
    <p>Wins:${human.wins}`;
  setTimeout(displayClassicGame, 5000);
};

function tieClassic(event) {
  gameOptionHomePage.innerHTML = `<h2>IT'S A TIE!</h2>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${classicFighters[computerResult].id} src="${classicFighters[computerResult].src}">
    `;
  rockImage.classList.add("hidden");
  paperImage.classList.add("hidden");
  scissorsImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  setTimeout(displayClassicGame, 5000);
};

function lossClassic(event) {
  gameOptionHomePage.innerHTML = `<h2>YOU LOSE!</h2>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${classicFighters[computerResult].id} src="${classicFighters[computerResult].src}">
    `;
  rockImage.classList.add("hidden");
  paperImage.classList.add("hidden");
  scissorsImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  computer.wins += 1;
  computerScore.innerHTML = `
    <h4>COMPUTER 💻</h4>
    <p>Wins:${computer.wins}`;
  setTimeout(displayClassicGame, 5000);
};

function winDifficult(event) {
  gameOptionHomePage.innerHTML = `<h2>YOU WIN!</h2> 
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${difficultFighters[computerResult].id} src="${difficultFighters[computerResult].src}">
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  alienImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");

  human.wins += 1;
  humanScore.innerHTML = `
    <h3>HUMAN 😎</h3>
    <p>Wins:${human.wins}`;
  setTimeout(displayDifficultGame, 5000);
};

function tieDifficult(event) {
  gameOptionHomePage.innerHTML = `<h2>IT'S A TIE!</h2>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${difficultFighters[computerResult].id} src="${difficultFighters[computerResult].src}">
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  alienImage.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  setTimeout(displayDifficultGame, 5000);
};

function lossDifficult(event) {
  gameOptionHomePage.innerHTML = `<h2>YOU LOSE!</h2>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}" >
    <img id="${difficultFighters[computerResult].id} src="${difficultFighters[computerResult].src}">
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  alienImage.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  computer.wins += 1;
  computerScore.innerHTML = `
    <h4>COMPUTER 💻</h4>
    <p>Wins:${computer.wins}`;
  setTimeout(displayDifficultGame, 5000);
};
    