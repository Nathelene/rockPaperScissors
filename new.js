// function determiningClassicLoss(event) {
//   if ( event.target.id === rockImage.id && classicFighters[computerResult].id === "paper") {
//     lossClassic(event);
//   } else if ( event.target.id === paperImage.id && classicFighters[computerResult].id === "scissors") {
//     lossClassic(event);
//   } else if ( event.target.id === scissorsImage.id && classicFighters[computerResult].id === "rock") {
//     lossClassic(event);
//   }
// };

// function determineDifficultLoss(event) {
//   if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "alien") || 
//     (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "paper2")) {  
//     lossDifficult(event);
//   } else if (
//     (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "scissors2") || 
//     (event.target.id === paperImage2.id && difficultFighters[computerResult].id ===  "iguana")) {
//     lossDifficult(event);
//   } else if (
//     (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "alien") || 
//     (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "rock2")) {
//     lossDifficult(event);
//   } else if (
//     (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "rock2") || 
//     (event.target.id === iguanaImage.id && difficultFighters[computerResult].id ==="scissors2")) {
//     lossDifficult(event);
//   } else if (
//     (event.target.id === alienImage.id && difficultFighters[computerResult].id === "paper2") || 
//     (event.target.id === alienImage.id && difficultFighters[computerResult].id === 'iguana')) {
//     lossDifficult(event);
//   }
// };

// if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "scissors2") || 
// (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "iguana")) {
// winDifficult(event);
// } else if ((event.target.id === paperImage2.id && difficultFighters[computerResult].id === "rock2") || 
// (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "alien")) {
// winDifficult(event);
// } else if ((event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "paper2") || 
// (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "iguana")) {
// winDifficult(event);
// } else if ((event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "paper2") || 
// (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "alien")) {
// winDifficult(event);
// } else if ((event.target.id === alienImage.id && difficultFighters[computerResult].id === "scissors2") || 
// (event.target.id === alienImage.id && difficultFighters[computerResult].id === "rock2")) {
// winDifficult(event);
// }
// };







//   if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "scissors2") || 
//     (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "iguana")) {
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//     gameResult(event)
//   } else if ((event.target.id === paperImage2.id && difficultFighters[computerResult].id === "rock2") || 
//     (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "alien")) {
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//     gameResult(event)
//   } else if ((event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "paper2") || 
//     (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "iguana")) {
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//         gameResult(event)
//   } else if ((event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "paper2") || 
//     (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "alien")) {
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//         gameResult(event)
//   } else if ((event.target.id === alienImage.id && difficultFighters[computerResult].id === "scissors2") || 
//     (event.target.id === alienImage.id && difficultFighters[computerResult].id === "rock2")) {
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//         gameResult(event)
//   } else if ((event.target.id === rockImage2.id && difficultFighters[computerResult].id === "alien") || 
//     (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "paper2")) {  
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//   } else if ((event.target.id === paperImage2.id && difficultFighters[computerResult].id === "scissors2") || 
//     (event.target.id === paperImage2.id && difficultFighters[computerResult].id ===  "iguana")) {
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//   } else if ((event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "alien") || 
//     (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "rock2")) {
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//   } else if ((event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "rock2") || 
//     (event.target.id === iguanaImage.id && difficultFighters[computerResult].id ==="scissors2")) {
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//   } else if ( (event.target.id === alienImage.id && difficultFighters[computerResult].id === "paper2") || 
//     (event.target.id === alienImage.id && difficultFighters[computerResult].id === 'iguana')) {
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//   } else if ((event.target.id === difficultFighters[computerResult].id)){



// var classicWinConditions = [
//     (event.target.id === rockImage.id && classicFighters[computerResult].id === "scissors"),
//     (event.target.id === scissorsImage.id && classicFighters[computerResult].id === "paper"),
//     (event.target.id === paperImage.id && classicFighters[computerResult].id === "rock")
// ];

// var classicLossConditions = [
//     (event.target.id === paperImage.id && classicFighters[computerResult].id === "scissors"),
//     (event.target.id === rockImage.id && classicFighters[computerResult].id === "paper"),
//     (event.target.id === scissorsImage.id && classicFighters[computerResult].id === "rock") 
// ];

// for (var i = 0; i < classicWinConditions.length; i++){
//     if(classicWinConditions[i] === true) {
//         human.selectedGame === 'classic'
//         human.resultMessage = '🎉 YOU WIN! 🎉'
//         gameResult(event)
//     }
// }
// for (var i = 0; i < classicLossConditions.length; i++){
//     if(classicLossConditions[i] === true) {
//         human.selectedGame === 'classic'
//         human.resultMessage = 'YOU LOSE!'
//         gameResult(event)
//      } else if (event.target.id === classicFighters[computerResult].id){
//         human.selectedGame === 'classic'
//         human.resultMessage = `IT'S A TIE!`
//         gameResult(event)
//     }
//     };




// function determiningDifficultResult(event) {
//     computerReturnsFighter(difficultFighters);
//     console.log(event.target.id)
//     console.log(difficultFighters[computerResult].id)
//     human.selectedGame = 'difficult'
  
//       var difficultWinConditions = [
//           (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "scissors2"),
//           (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "iguana"),
//           (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "rock2"),
//           (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "alien"),
//           (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "paper2"),
//           (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "iguana"),
//           (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "paper2"),
//           (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "alien"),
//           (event.target.id === alienImage.id && difficultFighters[computerResult].id === "scissors2"),
//           (event.target.id === alienImage.id && difficultFighters[computerResult].id === "rock2")
//          ];
//          var difficultLossConditions = [
//           (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "alien"),
//           (event.target.id === rockImage2.id && difficultFighters[computerResult].id === "paper2"),
//           (event.target.id === paperImage2.id && difficultFighters[computerResult].id === "scissors2"),
//           (event.target.id === paperImage2.id && difficultFighters[computerResult].id ===  "iguana"),
//           (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "alien"),
//           (event.target.id === scissorsImage2.id && difficultFighters[computerResult].id === "rock2"),
//           (event.target.id === iguanaImage.id && difficultFighters[computerResult].id === "rock2"),
//           (event.target.id === iguanaImage.id && difficultFighters[computerResult].id ==="scissors2"),
//           (event.target.id === alienImage.id && difficultFighters[computerResult].id === "paper2"),
//           (event.target.id === alienImage.id && difficultFighters[computerResult].id === 'iguana')
//          ];
//          for (var i = 0; i < difficultWinConditions.length; i++){
//           if(difficultWinConditions[i] === true) {
//               human.resultMessage = '🎉 YOU WIN! 🎉'
//           }
//         };
  
//         for (var i = 0; i < difficultLossConditions.length; i++) {
//           if (difficultLossConditions[i] === true) {
//               human.resultMessage = 'YOU LOSE!'
//           } else if(event.target.id === difficultFighters[computerResult].id){
//               human.resultMessage = `IT'S A TIE!`
//           }
//         };
//          gameResult(event)
//   };