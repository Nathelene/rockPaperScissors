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
var computerResult;
var changeGameButton = document.querySelector(".change-game-button");

////Data Model

var human = {
  wins: 0,
  win: false,
};

var computer = {
  wins: 0,
  win: false,
};

/////////////////EVENT LISTENERS//////////////////////
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);
// changeGameButton.addEventListener("click", showHomeView)

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
  showFightersPage.innerHTML = `<h3>Choose Your Fighter!</h3>`;
  rockImage.classList.remove("hidden");
  paperImage.classList.remove("hidden");
  scissorsImage.classList.remove("hidden");
  changeGameButton.classList.remove("hidden")
};

function displayDifficultGame() {
  showFightersPage.innerHTML = `<h3>Choose Your Fighter!</h3>`;
  rockImage2.classList.remove("hidden");
  paperImage2.classList.remove("hidden");
  scissorsImage2.classList.remove("hidden");
  alienImage.classList.remove("hidden");
  iguanaImage.classList.remove("hidden");
  changeGameButton.classList.remove("hidden")
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

////////////Classic Game Functions///////////////
function determiningClassicWin(event) {
  computerReturnsFighter(classicFighters);
  console.log(event.target.id);
  console.log(classicFighters[computerResult].id);

  if (event.target.id === rockImage.id && classicFighters[computerResult].id === "scissors") {
    winClassic(event);
  } else if ( event.target.id === scissorsImage.id && classicFighters[computerResult].id === "paper") {
    winClassic(event);
  } else if ( event.target.id === paperImage.id && classicFighters[computerResult].id === "rock") {
    winClassic(event);
  }
};

function determiningClassicTie(event) {
  if (event.target.id === classicFighters[computerResult].id) {
    return tieClassic(event);
  }
};

function determiningClassicLoss(event) {
  if ( event.target.id === rockImage.id && classicFighters[computerResult].id === "paper") {
    lossClassic(event);
  } else if ( event.target.id === paperImage.id && classicFighters[computerResult].id === "scissors") {
    lossClassic(event);
  } else if ( event.target.id === scissorsImage.id && classicFighters[computerResult].id === "rock") {
    lossClassic(event);
  }
};

function winClassic(event) {
  console.log("here win classic");

  showFightersPage.innerHTML = `<h3>YOU WIN!</h3> 
      <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
      <img class="fighter-image" id="${classicFighters[computerResult].id}" src="${classicFighters[computerResult].src}"/>
 
      `;
  rockImage.classList.add("hidden");
  paperImage.classList.add("hidden");
  scissorsImage.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  alienImage.classList.add("hidden");

  human.win = true;
  if (human.win = true) {
    human.wins += 1;
  }
  humanScore.innerHTML = `
      <h1>HUMAN 😎</h1>
      <p>Wins:${human.wins}</p>
      `;
  setTimeout(displayClassicGame, 5000);
};

function tieClassic(event) {
  console.log("here tie classic");
  console.log(classicFighters[computerResult].id)
  console.log(classicFighters[computerResult].src)
  showFightersPage.innerHTML = `<h3>IT'S A TIE!</h3>
      <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
      <img class="fighter-image" id="${classicFighters[computerResult].id}" src="${classicFighters[computerResult].src}"/>`;
  rockImage.classList.add("hidden");
  paperImage.classList.add("hidden");
  scissorsImage.classList.add("hidden");
  setTimeout(displayClassicGame, 5000);
};

function lossClassic(event) {
  console.log("here loss classic");
  showFightersPage.innerHTML = `<h3>YOU LOSE!</h3>
      <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
      <img class="fighter-image" id="${classicFighters[computerResult].id}" src="${classicFighters[computerResult].src}"/>`;
  rockImage.classList.add("hidden");
  paperImage.classList.add("hidden");
  scissorsImage.classList.add("hidden");
  computer.win = true;
  if ((computer.win = true)) {
    computer.wins += 1;
  }
  computerScore.innerHTML = `
      <h4>COMPUTER 💻</h4>
      <p>Wins:${computer.wins}`;
  setTimeout(displayClassicGame, 5000);
};

//////////////Difficult Game Functions///////////
function determineDifficultWin(event) {
  computerReturnsFighter(difficultFighters);
  console.log(event.target.id);
  console.log(difficultFighters[computerResult].id);

  if (
    (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "iguana")) {
    winDifficult(event);
  } else if (
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "rock2") || 
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "alien")) {
    winDifficult(event);
  } else if (
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "iguana")) {
    winDifficult(event);
  } else if (
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "alien")) {
    winDifficult(event);
  } else if (
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === "rock2")) {
    winDifficult(event);
  }
};

function determineDifficultTie(event) {
  if (event.target.id === difficultFighters[computerResult].id) {
    tieDifficult(event);
  }
};

function determineDifficultLoss(event) {
  if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "alien") || 
    (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "paper2")) {  
    lossDifficult(event);
  } else if (
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "scissors2") || 
    (event.target.id === paperImage2.id && difficultFighters[computerResult].id ===  "iguana")) {
    lossDifficult(event);
  } else if (
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "alien") || 
    (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "rock2")) {
    lossDifficult(event);
  } else if (
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "rock2") || 
    (event.target.id === iguanaImage.id && difficultFighters[computerResult].id ==="scissors2")) {
    lossDifficult(event);
  } else if (
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === "paper2") || 
    (event.target.id === alienImage.id && difficultFighters[computerResult].id === 'iguana')) {
    lossDifficult(event);
  }
};

function winDifficult(event) {
  console.log("here win");
  console.log(difficultFighters[computerResult].id)
  console.log(difficultFighters[computerResult].src)

  showFightersPage.innerHTML = `<h3>YOU WIN!</h3> 
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
    <img class="fighter-image" id="${difficultFighters[computerResult].id}" src="${difficultFighters[computerResult].src}"/>
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  iguanaImage.classList.add("hidden");
  alienImage.classList.add("hidden");

  human.win = true;
  if (human.win === true) {
    human.wins += 1;
  }

  humanScore.innerHTML = `
    <h1>HUMAN 😎</h1>
    <p>Wins:${human.wins}</p>
    `;

    setTimeout(displayDifficultGame, 5000);
};

function tieDifficult(event) {
  console.log("here tie");
  console.log(difficultFighters[computerResult].id)
  console.log(difficultFighters[computerResult].src)

  showFightersPage.innerHTML = `<h3>IT'S A TIE!</h3>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
    <img class="fighter-image" id="${difficultFighters[computerResult].id}" src="${difficultFighters[computerResult].src}"/>
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  alienImage.classList.add("hidden");
  iguanaImage.classList.add("hidden");

    setTimeout(displayDifficultGame, 5000);
};

function lossDifficult(event) {
  console.log("here loss");
  console.log(difficultFighters[computerResult].id)
  console.log(difficultFighters[computerResult].src)

  showFightersPage.innerHTML = `<h3>YOU LOSE!</h3>
    <img class="fighter-image" id="${event.target.id}" src="${event.target.src}"/>
    <img class="fighter-image" id="${difficultFighters[computerResult].id}" src="${difficultFighters[computerResult].src}"/>
    `;
  rockImage2.classList.add("hidden");
  paperImage2.classList.add("hidden");
  scissorsImage2.classList.add("hidden");
  alienImage.classList.add("hidden");
  iguanaImage.classList.add("hidden");

  computer.win = true;
  if (computer.win === true) {
    computer.wins += 1;
  }

  computerScore.innerHTML = `
    <h4>COMPUTER 💻</h4>
    <p>Wins:${computer.wins}
  `;

    setTimeout(displayDifficultGame, 5000);
};
